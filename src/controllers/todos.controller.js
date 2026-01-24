import { addTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../services/todo.services.js";

export const getAll = async (req, res) => {
    try {
        const todos = await getTodos(req.user._id);
        return res.status(200)
            .json({ "success": true, "message": "get Todos success", todos });
    } catch (error) {
        return res.status(500)
            .json({ message: error.message || "internal server error" })
    }
}

export const gettById = async (req, res) => {
    try {
        const todo = await getTodoById(req.user._id, req.params);
        return res.status(200)
            .json({ "success": true, "message": "get Todo success", todo });
    } catch (error) {
        return res.status(500)
            .json({ message: error.message || "internal server error" })
    }
}

export const create = async (req, res) => {
    try {
        const todo = await addTodo(req.user._id, req.body);
        return res.status(201)
            .json({ success: true, message: "todo created success", todo });
    } catch (error) {
        return res.status(500)
            .json({ message: error.message || "internal server error" })
    }
}

export const update = async (req, res) => {
    try {
        await updateTodo(req.user._id, req.params.id, req.body);
        return res.status(201)
            .json({ success: true, message: "update success" });
    } catch (error) {
        return res.status(500)
            .json({ message: error.message || "internal server error" });
    }
}

export const removeTodo = async (req, res) => {
    try {
        await deleteTodo(req.user._id, req.params);
        return res.status(201)
            .json({ success: "true", message: "deleted success" })
    } catch (error) {
        return res.status(500)
            .json({ message: error.message || "internal server error" })
    }
}