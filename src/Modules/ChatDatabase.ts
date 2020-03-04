import * as redis from "redis";

class ChatDatabase {
  static redisClient: redis.RedisClient = redis.createClient();
  static async writeMessage(message: string, sender: string, room: string) {
    const result = await ChatDatabase.redisClient.lpush(
      `${room}`,
      `${sender}:${new Date().getTime()}:${message}`
    );
    return result;
  }
}

export default ChatDatabase;
