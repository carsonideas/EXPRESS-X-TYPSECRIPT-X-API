import { Request, Response } from "express";
import prisma from "../prisma/client";

export const getTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } catch (e) {
    res
      .status(500)
      .json({ message: "HOUSTON! something went wrong!! noooo!!!!" });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const task = await prisma.task.findUnique({ where: { id: req.params.id } });
    if (!task)
      res
        .status(404)
        .json({ message: "HOUSTON! Task not found!! noooo!!!!" });
    res.status(200).json(task);

  } catch (e) {
    res
      .status(500)
      .json({ message: "HOUSTON! something went wrong!! noooo!!!!" });
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const task = await prisma.task.create({
      data: { title, description },
    });
    res.status(201).json(task);
  } catch (e) {
    res
      .status(500)
      .json({ message: "HOUSTON! something went wrong!! noooo!!!!" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { title, description, isCompleted } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id: req.params.id },
      data: { title, description, isCompleted },
    });
    res.status(200).json(task);
  } catch (e) {
    res
      .status(500)
      .json({ message: "HOUSTON! something went wrong!! noooo!!!!" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    await prisma.task.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res
      .status(500)
      .json({ message: "HOUSTON! something went wrong!! noooo!!!!" });
  }
};
