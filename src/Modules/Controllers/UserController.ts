import * as redis from "redis";
import * as firebase from "firebase-admin";

class UserController {
  static redisClient: redis.RedisClient = redis.createClient();

  public static async setStatus(userUID: string, status: string) {
    await UserController.redisClient.hset(
      `userdata:${userUID}`,
      "status",
      status
    );
  }
}

export default UserController;
