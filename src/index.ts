import "express";
import * as express from "express";
import * as socket from "socket.io";
import * as path from "path";
import * as redis from "redis";
import * as firebase from "firebase-admin";
import Auth from "./Modules/Auth";
import ChatDatabase from "./Modules/ChatDatabase";
import UserController from "./Modules/Controllers/UserController";

const serviceAccount = require("./serviceAccount.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://fairy-6c964.firebaseio.com"
});

interface SocketConnection {
  [key: string]: socket.Socket[];
}

const redisClient = redis.createClient();

redisClient.flushall();

let connections: SocketConnection = {};
const app = express();
app.set("port", 3332);

let http = require("http").Server(app);

let io = socket(http);

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./test.html"));
});

app.get("/2", (req, res) => {
  res.sendFile(path.resolve("./test2.html"));
});

io.on("connection", (socket: socket.Socket) => {
  /**
   * connect_user invokes when user authentificated in firebase system, anonymous or not.
   */

  socket.on("connect_user", async (message: { uid: string }) => {
    try {
      const idToken = socket.handshake.query["id_token"];
      if (idToken) {
        let uid = await Auth.getUID(idToken);
        /**
         * Retrieve total user connections. Add socket to user pull ff current user connected from other device;
         * Or create a new key value pair in total pull
         */
        let uidConnections = connections[uid];
        if (uidConnections) {
          connections[uid].push(socket);
        } else if (!uidConnections) {
          /**
           * create new [uid]: socket[] pair in total user pull if connections from user doesnt exist at all.
           * Set user status
           */
          const newConnection = { [uid]: [socket] };
          Object.assign(connections, newConnection);
        }

        console.log("user connected", uid);
        console.log("TOTAL CONNECTED USERS", Object.keys(connections).length);
        console.log(
          "CONNECTIONS BY THIS USER",
          connections[uid] ? connections[uid].length : 0
        );

        /**
         * Join all rooms user is in
         */
        redisClient.smembers(
          `roomsETE:${uid}`,
          (err: Error, reply: string[]) => {
            if (err) throw Error(err.toString());
            reply.forEach(room => {
              socket.join(room);
            });
          }
        );

        socket.on("disconnect", () => {
          const connectionsTotal = connections[uid].length;
          if (connectionsTotal === 1) {
            /**
             * if all connections is lost, delete connection from pull and set offline status
             */
            // UserController.setOffline(uid);
            delete connections[uid];
          } else if (connectionsTotal > 1) {
            const i = connections[uid].findIndex(
              (sock: socket.Socket) => sock === socket
            );
            connections[uid].splice(i, 1);
          }
        });
      }
    } catch (e) {
      console.error(e);
    }
  });
  /**
   * Broadcasts message to the target room.
   * Write message to RedisDB requires 2 parameters: sender firebase UID and room.
   */
  socket.on("broadcast", async data => {
    const idToken = socket.handshake.query["id_token"];
    const sender = await Auth.getUID(idToken);
    console.log("start broadcast to", data.room);

    /**
     * Write message to redis database
     */
    ChatDatabase.writeMessage(data.msg, sender, data.room);

    socket.broadcast
      .to(data.room)
      .emit("receive_message", { message: data.msg });
  });

  /**
   * This emitter specially designed for firebase activity listener. It tracks activity across all connections
   * and sets user precense status.
   */
  socket.on("setStatus", async data => {
    UserController.setStatus(data.uid, data.status);
  });

  socket.on("invite", async room => {
    const idToken = socket.handshake.query["id_token"];
    const { to } = room.to;
    const from = await Auth.getUID(idToken);
    console.log("INVITED PERSON", room.to);
    console.log("FROM PERSON", room.from);
    /*
     * create a new room unique name with two parameters:
     * from: persons who starts the conversation
     * to: person who recieved first message
     */
    const newRoom = `${from}:${to}`;
    /*
     * Write data to both sender and receiver accounts
     */
    redisClient.sadd(`roomsETE:${to}`, newRoom);
    redisClient.sadd(`roomsETE:${from}`, newRoom);
    /*
    if users are currently connected immediately join them to newly created room
    */
    const receiver = connections[to];
    const sender = connections[from];
    if (receiver) {
      receiver.forEach((socket: socket.Socket) => socket.join(newRoom));
      // receiver.emit("create_chat_room", {room: newRoom, recipient: room.from});
    }
    if (sender) {
      sender.forEach((socket: socket.Socket) => socket.join(newRoom));
      // receiver.emit("create_chat_room", {room: newRoom, recipient: room.to});
    }
  });
});

http.listen(3332, () => {
  console.log("SERVER START LISTENING");
});
