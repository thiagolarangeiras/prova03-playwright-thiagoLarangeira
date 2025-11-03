import { join } from "path";
import { TheConfig } from "sicolo";

export type User = {
    name: string;
    password: string;
};


export function getVar(variable: string) {
    const CONFIG = join(__dirname, '../support/fixtures/config.yml');
    const BASE_URL = TheConfig.fromFile(CONFIG)
        .andPath(`application.${variable}`)
        .retrieveData();
    return BASE_URL;
}