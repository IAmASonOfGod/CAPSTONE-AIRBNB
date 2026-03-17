import { DevEnvironment } from "./environment.dev.js";
import { ProdEnvironment } from "./environment.prod.js";


export interface Environment {
  db_uri: string;
  jwt_secret_key: string;
  jwt_refresh_secret_key: string;
}

export function getEnvironmentVariables() {
  if (process.env.NODE_ENV === "production") {
    return ProdEnvironment;
  }
  return DevEnvironment;
}



