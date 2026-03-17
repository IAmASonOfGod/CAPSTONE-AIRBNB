import express from "express";
import { UserController } from "../controllers/UserController.js";
import { UserValidators } from "../validators/UserValidator.js";
import { GlobalMiddleware } from "../middlewares/GlobalMiddlewares.js";

const router = express.Router();

class UserRouter {
  constructor() {
    this.postRoutes();
  }
 
  postRoutes() {
    router.post(
      "/login",
      UserValidators.login(),
      GlobalMiddleware.checkErrors,
      UserController.login
    );
     router.post(
       "/refresh_token",
       UserValidators.checkRefreshToken(),
       GlobalMiddleware.checkErrors,
       UserController.getNewTokens
     );
  }
}

new UserRouter();

export default router;
