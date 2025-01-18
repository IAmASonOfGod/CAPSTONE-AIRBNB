import { DevEnvironment } from "./environment.dev";
import { ProdEnvironment } from "./environment.prod";
export function getEnvironmentVariables() {
    if (process.env.NODE_ENV === "production") {
        return ProdEnvironment;
    }
    return DevEnvironment;
}
