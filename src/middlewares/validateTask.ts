import { Request, Response, NextFunction } from "express";

export const validateTask = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { title, description } = req.body;

  if (!title || typeof title !== "string") {
    res.status(400).json({ message: "HOUSTON! Title is required!" });
  }

  if (!description || typeof description !== "string") {
    res.status(400).json({ message: "HOUSTON! Description is required!" });
  }

  next();
};
