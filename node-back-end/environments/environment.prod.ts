import { Environment } from "./environment";
import dotenv from "dotenv";

dotenv.config();

const ProdEnvironment: Environment = {
  db_uri: process.env.PROD_DB_URI,
  jwt_secret_key: process.env.JWT_SECRET_KEY_PROD,
  jwt_refresh_secret_key: process.env.JWT_REFRESH_SECRET_KEY_PROD,
};

export { ProdEnvironment };


