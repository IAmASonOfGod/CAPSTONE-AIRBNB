import express from "express";
import { UserController } from "../controllers/UserController";
const router = express.Router();
class UserRouter {
    constructor() {
        this.postRoutes();
    }
    postRoutes() {
        router.post("/login", UserController.login);
    }
}
new UserRouter();
export default router;
