import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { getEnvironmentVariables } from "./environments/environment";
import userRouter from "./routers/UserRouter";
import cors from "cors";
class Server {
    app;
    dbUrl;
    constructor() {
        dotenv.config();
        this.app = express();
        this.dbUrl = getEnvironmentVariables().db_url;
        this.setConfigs();
    }
    corsOptions = {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    };
    setConfigs() {
        this.app.use(cors(this.corsOptions));
        this.app.use(express.json());
        this.connectMongoDB();
        this.setRoutes();
    }
    connectMongoDB() {
        mongoose
            .connect(this.dbUrl)
            .then(() => {
            console.log("Connected to MongoDB");
        })
            .catch((err) => {
            console.error("Error connecting to MongoDB:", err.message);
        });
    }
    setRoutes() {
        this.app.use("/api/user", userRouter);
    }
    startServer() {
        const PORT = process.env.PORT || 5000;
        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
}
export default Server;
