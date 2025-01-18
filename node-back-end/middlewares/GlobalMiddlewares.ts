import { validationResult } from "express-validator";
import { JwtUtil } from "../Utils/Jwt";

export class GlobalMiddleware {
  static checkErrors(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log({ errors: errors.array().map((x) => x.msg) });
      return res.status(400).json({ errors: errors.array().map((x) => x.msg) });
    } else {
      next();
    }
  }

  static async auth(req, res, next) {
    const header_auth = req.headers.authorization;
    const token = header_auth ? header_auth.slice(7, header_auth.length) : null;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token is required" });
    }

    try {
      const decoded = await JwtUtil.JwtVerify(token);
      req.decoded = decoded;
      next();
    } catch (e) {
      console.error("Authentication error:", e);
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  }
}