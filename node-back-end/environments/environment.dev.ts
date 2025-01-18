import { Environment } from "./environment";
import dotenv from "dotenv";

dotenv.config();

const DevEnvironment: Environment = {
  db_uri: process.env.DEV_DB_URI,
  jwt_secret_key: process.env.JWT_SECRET_KEY_DEV,
  jwt_refresh_secret_key: process.env.JWT_REFRESH_SECRET_KEY_DEV,
};

export { DevEnvironment };
