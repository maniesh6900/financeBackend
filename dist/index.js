"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
dotenv_1.default.config({
    path: "./.env"
});
(0, db_1.connectmongoose)()
    .then(() => {
    app_1.app.listen(3000, () => {
        console.log(`server is running on PORT : ${3000}`);
    });
})
    .catch((error) => {
    console.error(error);
});
