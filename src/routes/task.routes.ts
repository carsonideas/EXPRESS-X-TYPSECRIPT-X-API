import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} 

from "../controllers/task.controller";

import { validateTask } from "../middlewares/validateTask";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", validateTask, createTask);        
router.patch("/:id", validateTask, updateTask);    
router.delete("/:id", deleteTask);

export default router;
