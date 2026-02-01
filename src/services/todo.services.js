import todosModel from "../db/models/todos.model.js"
import { paginate } from "../utils/pagination.js";

export const getTodos = async (userId, pag, lmt) => {
    const total = await todosModel.countDocuments({ user: userId })
    const { limit, skip, page, totalPages, totalItems, hasNext, hasPrev } = paginate(total, pag, lmt)
    const pagination = { limit, skip, page, totalPages, totalItems, hasNext, hasPrev }
    const todos = await todosModel.find({ user: userId }).skip(skip).limit(limit);
    return { todos, pagination }
}

export const getTodoById = async (userId, data) => {
    const { id } = data
    const todo = await todosModel.findOne({ _id: id, user: userId });
    return todo
}

export const addTodo = async (userId, data) => {
    const { title, description, note } = data
    const todo = await todosModel.create({
        user: userId,
        title,
        description,
        note
    });
    return todo
}

export const updateTodo = async (userId, todoId, data) => {
    await todosModel.findOneAndUpdate(
        {
            _id: todoId,
            user: userId
        },
        data,
    );
}


export const deleteTodo = async (userId, data) => {
    const { id } = data
    await todosModel.findOneAndDelete({ _id: id, user: userId });
}