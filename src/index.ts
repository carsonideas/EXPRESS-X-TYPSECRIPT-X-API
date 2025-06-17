import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/task.routes";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3100;

app.use(express.json());
app.use("/tasks", taskRoutes);

app.get("/", (_req, res) => {
  res.send(
    "<h1>HOUSTON!! Today we have a tasks API in Typescript in conjunction with Expressjs.....YIKES</h1>",
  );
});

console.log(`HOUSTON!!! are we ok...!!!,are ready to gooo........!!!`);

app.listen(PORT, () => {
  console.log(`HOUSTON!! the App running on port ${PORT}... Yikes....!!`);
});
