import Jwt from "jsonwebtoken";
import { getEnvironmentVariables } from "../environments/environment";
import * as Crypto from "crypto";
const { jwt_secret_key, jwt_refresh_secret_key } = getEnvironmentVariables();
export class JwtUtil {
    static JwtSign(payload, audience, expires_in = "1h") {
        return this.signToken(payload, audience, expires_in, jwt_secret_key);
    }
    static JwtVerify(token) {
        return this.verifyToken(token, jwt_secret_key);
    }
    static JwtSignRefreshToken(payload, audience, expires_in = "1y") {
        return this.signToken(payload, audience, expires_in, jwt_refresh_secret_key);
    }
    static JwtVerifyRefreshToken(token) {
        return this.verifyToken(token, jwt_refresh_secret_key);
    }
    static signToken(payload, audience, expires_in, secret) {
        const options = {
            expiresIn: expires_in,
            audience: audience,
            issuer: process.env.JWT_ISSUER || "DefaultIssuer",
        };
        return Jwt.sign(payload, secret, options);
    }
    static verifyToken(token, secret) {
        return new Promise((resolve, reject) => {
            Jwt.verify(token, secret, (err, decoded) => {
                if (err) {
                    reject(new Error(err.message || "Token verification failed"));
                }
                else {
                    resolve(decoded);
                }
            });
        });
    }
    static gen_secret_key() {
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
