import Jwt, { SignOptions } from "jsonwebtoken";
import { getEnvironmentVariables } from "../environments/environment";
import * as Crypto from "crypto";

const { jwt_secret_key, jwt_refresh_secret_key } = getEnvironmentVariables();

export class JwtUtil {
  static JwtSign(
    payload: object,
    audience: string,
    expires_in: string = "1h"
  ): string {
    return this.signToken(payload, audience, expires_in, jwt_secret_key);
  }

  static JwtVerify(token: string): Promise<any> {
    return this.verifyToken(token, jwt_secret_key);
  }

  static JwtSignRefreshToken(
    payload: object,
    audience: string,
    expires_in: string = "1y"
  ): string {
    return this.signToken(
      payload,
      audience,
      expires_in,
      jwt_refresh_secret_key
    );
  }

  static JwtVerifyRefreshToken(token: string): Promise<any> {
    return this.verifyToken(token, jwt_refresh_secret_key);
  }

  private static signToken(
    payload: object,
    audience: string,
    expires_in: string,
    secret: string
  ): string {
    const options: SignOptions = {
      expiresIn: expires_in,
      audience: audience,
      issuer: process.env.JWT_ISSUER || "DefaultIssuer",
    };

    return Jwt.sign(payload, secret, options);
  }

  private static verifyToken(token: string, secret: string): Promise<any> {
    return new Promise((resolve, reject) => {
      Jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          reject(new Error(err.message || "Token verification failed"));
        } else {
          resolve(decoded);
        }
      });
    });
  }

  private static gen_secret_key() {
    const JWT_SECRET_KEY_DEV = Crypto.randomBytes(32).toString("hex");
    const JWT_REFRESH_SECRET_KEY_DEV = Crypto.randomBytes(32).toString("hex");

    const JWT_SECRET_KEY_PROD = Crypto.randomBytes(32).toString("hex");
    const JWT_REFRESH_SECRET_KEY_PROD = Crypto.randomBytes(32).toString("hex");

    console.table({
      JWT_SECRET_KEY_DEV,
      JWT_REFRESH_SECRET_KEY_DEV,
      JWT_SECRET_KEY_PROD,
      JWT_REFRESH_SECRET_KEY_PROD,
    });
  }
}



