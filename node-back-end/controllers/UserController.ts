import User from "../models/User";
import * as bcrypt from "bcrypt";
import { getEnvironmentVariables } from "../environments/environment";
import { JwtUtil } from "../Utils/Jwt";

export class UserController {
  static async login(req, res, next) {
    console.log("Login route hit");
    console.log("Login request body:", req.body);
    const { username, password, role } = req.body;

    try {
      let user = await User.findOne({ username });

      if (user) {
        // User exists, proceed with login
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: "Invalid password" });
        }

        // Issue a JWT for authentication
        const payload = {
          username: user.username,
          role: user.role,
        };
        const access_token = JwtUtil.JwtSign(payload, user._id.toString());
        const refresh_token = JwtUtil.JwtSignRefreshToken(
          payload,
          user._id.toString()
        );

        return res.json({
          token: access_token,
          refreshToken: refresh_token,
          user,
        });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({
          username,
          password: hashedPassword,
          role,
        });

        const savedUser = await user.save();

        const payload = {
          username: savedUser.username,
          role: savedUser.role,
        };
        const access_token = JwtUtil.JwtSign(payload, savedUser._id.toString());
        const refresh_token = JwtUtil.JwtSignRefreshToken(
          payload,
          user._id.toString()
        );

        return res.json({
          token: access_token,
          refreshToken: refresh_token,
          user: savedUser,
        });
      }
    } catch (error) {
      console.error("Error during login/signup:", error);
      next(error);
    }
  }

  static async getNewTokens(req, res, next) {
    const refreshToken = req.body.refreshToken;
    try {
      const decoded_data = await JwtUtil.JwtVerifyRefreshToken(refreshToken);
      if (decoded_data) {
        const payload = {
          username: decoded_data.username,
          role: decoded_data.role,
        };
        const access_token = JwtUtil.JwtSign(payload, decoded_data.aud);
        const refresh_token = JwtUtil.JwtSignRefreshToken(
          payload,
          decoded_data.aud
        );
        return res.json({
          token: access_token,
          refreshToken: refresh_token,
        });
      } else {
        req.errorStatus = 403;
        throw "Access is forbidden";
      }
    } catch (e) {
      next(e);
    }
  }
}
