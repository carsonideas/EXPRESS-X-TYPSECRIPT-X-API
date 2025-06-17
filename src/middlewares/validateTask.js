"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTask = void 0;
const validateTask = (req, res, next) => {
    const { title, description } = req.body;
    if (!title || typeof title !== "string") {
        res.status(400).json({ message: "HOUSTON! Title is required!" });
    }
    if (!description || typeof description !== "string") {
        res.status(400).json({ message: "HOUSTON! Description is required!" });
    }
    next();
};
exports.validateTask = validateTask;
