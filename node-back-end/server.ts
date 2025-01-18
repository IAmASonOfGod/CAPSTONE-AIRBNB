import express, { Application } from "express";
import mongoose from "mongoose";
import { getEnvironmentVariables } from "./environments/environment";
import userRouter from "./routers/UserRouter";
import AccomodationRouter from "./routers/AccomodationRouter";
import ReservationRouter from "./routers/ReservationRouter";
import cors, { CorsOptions } from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname in an ES module environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Server {
  app: Application;
  dbUrl: string;

  constructor() {
    this.dbUrl = getEnvironmentVariables().db_uri;
    this.app = express();
    this.setConfigs();
  }

  corsOptions: CorsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };

  setConfigs() {
    this.app.use(cors(this.corsOptions));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    // Serve uploaded files statically
   const uploadsDir = path.resolve(
     "C:/Users/mbali/OneDrive/Desktop/CAPSTONE-AIRBNB-APP/node-back-end/uploads"
   );
    this.app.use("/uploads", express.static(uploadsDir));
    // console.log("Uploads directory:", uploadsDir);

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
    this.app.use("/api/accommodations", AccomodationRouter);
    this.app.use("/api/Reservations", ReservationRouter);
  }

  startServer() {
    const PORT = process.env.PORT || 5000;
    this.app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

export default Server;