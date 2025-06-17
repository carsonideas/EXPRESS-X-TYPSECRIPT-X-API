"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3100;
app.use(express_1.default.json());
app.use("/tasks", task_routes_1.default);
app.get("/", (_req, res) => {
    res.send("<h1>HOUSTON!! Today we have a tasks API in Typescript in conjunction with Expressjs.....YIKES</h1>");
});
console.log(`HOUSTON!!! are we ok...!!!,are ready to gooo........!!!`);
app.listen(PORT, () => {
    console.log(`HOUSTON!! the App running on port ${PORT}... Yikes....!!`);
});
