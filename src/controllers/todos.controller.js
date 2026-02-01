import { addTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../services/todo.services.js";
import { resMsg } from "../utils/globaleMessage.js";

export const getAll = async (req, res, next) => {
    const{page=1,limit=5}= req.query
    const {todos,pagination} = await getTodos(req.user._id,+page,+limit);
    if (!todos.length)
        return next(new Error("Dont Have Any Todo", { cause: 204 }));
    return resMsg(res, 200, "get Todos success", todos,pagination)
}

export const gettById = async (req, res, next) => {

    const todo = await getTodoById(req.user._id, req.params);
    if (!todo) {
        return next(new Error("Todo Not Found", { cause: 404 }))
    }
    return resMsg(res, 200, "get Todo success", todo)

}

export const create = async (req, res) => {
    const todo = await addTodo(req.user._id, req.body);
    return resMsg(res, 200, "todo created success", todo)
}

export const update = async (req, res, next) => {
    const todo = await updateTodo(req.user._id, req.params.id, req.body);
    if (!todo)
        return next(new Error("Todo not found", { cause: 404 }))
    return resMsg(res, 201, "Update success")
}

export const removeTodo = async (req, res, next) => {
    const todo = await deleteTodo(req.user._id, req.params);
    if (!todo)
        return next(new Error("Todo not found", { cause: 404 }))
    return resMsg(res, 201, "Delete success")
}