import { DevEnvironment } from "./environment.dev.js";
import { ProdEnvironment } from "./environment.prod.js";
export function getEnvironmentVariables() {
    if (process.env.NODE_ENV === "production") {
        return ProdEnvironment;
    }
    return DevEnvironment;
}
