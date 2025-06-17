"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTask = exports.getTasks = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const getTasks = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield client_1.default.task.findMany();
        res.status(200).json(tasks);
    }
    catch (e) {
        res
            .status(500)
            .json({ message: "HOUSTON! something went wrong!! noooo!!!!" });
    }
});
exports.getTasks = getTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield client_1.default.task.findUnique({ where: { id: req.params.id } });
        if (!task)
            res
                .status(404)
                .json({ message: "HOUSTON! Task not found!! noooo!!!!" });
        res.status(200).json(task);
    }
    catch (e) {
        res
            .status(500)
            .json({ message: "HOUSTON! something went wrong!! noooo!!!!" });
    }
});
exports.getTask = getTask;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    try {
        const task = yield client_1.default.task.create({
            data: { title, description },
        });
        res.status(201).json(task);
    }
    catch (e) {
        res
            .status(500)
            .json({ message: "HOUSTON! something went wrong!! noooo!!!!" });
    }
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, isCompleted } = req.body;
    try {
        const task = yield client_1.default.task.update({
            where: { id: req.params.id },
            data: { title, description, isCompleted },
        });
        res.status(200).json(task);
    }
    catch (e) {
        res
            .status(500)
            .json({ message: "HOUSTON! something went wrong!! noooo!!!!" });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client_1.default.task.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res
            .status(500)
            .json({ message: "HOUSTON! something went wrong!! noooo!!!!" });
    }
});
exports.deleteTask = deleteTask;
