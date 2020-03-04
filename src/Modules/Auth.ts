import * as firebase from "firebase-admin";

interface IdTokenResult {
  uid: string;
  accessType: number;
  authTime: number;
}

class Auth {
  public static async getUID(idToken: string): Promise<string> {
    return firebase
      .auth()
      .verifyIdToken(idToken)
      .then((decoded: firebase.auth.DecodedIdToken) => {
        return decoded.uid;
      });
  }
  public static async fetchIdTokenResult(
    idToken: string
  ): Promise<IdTokenResult> {
    const result = await firebase
      .auth()
      .verifyIdToken(idToken)
      .then(async (decoded: firebase.auth.DecodedIdToken) => {
        const accessType: number = await firebase
          .auth()
          .getUser(decoded.uid)
          .then((user: firebase.auth.UserRecord) => {
            return user.customClaims["accessType"];
          });
        return {
          uid: decoded.uid,
          authTime: decoded.auth_time,
          accessType
        };
      });

    return result;
  }
}

export default Auth;
