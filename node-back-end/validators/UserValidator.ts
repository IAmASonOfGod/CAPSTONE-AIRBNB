import { body } from "express-validator";

export class UserValidators {
  static login() {
    return [
      body("username", "Userame is required").isString(),
      body("password", "Password is required").isString(),
      body("role", "Role is required").isString(),
    ];
  }

  static checkRefreshToken() {
    return [
      body("refreshToken", "Refresh token is required")
        .isString()
        .custom((refreshToken, { req }) => {
          if (refreshToken) {
            return true;
          } else {
            req.errorStatus = 403;
            throw "Access is forbidden";
          }
        }),
    ];
  }
}
