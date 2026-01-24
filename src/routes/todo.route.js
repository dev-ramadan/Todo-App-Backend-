import { Router } from "express";
import { create, getAll, gettById, removeTodo, update } from "../controllers/todos.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const todoRoute = Router();
/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: Todo management routes
 */

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all todos for the logged-in user
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of todos
 */
// ** get all todos 
todoRoute.get("/todos", auth, getAll);

/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Get todo by id
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo object
 */
// ** get  todo by id 
todoRoute.get("/todos/:id", auth, gettById);


/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               note:
 *                 type: string
 *               isFinished:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Todo created successfully
 */
// ** add  todo 
todoRoute.post("/todos", auth, create);



/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update a todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               note:
 *                 type: string
 *               isFinished:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Todo updated successfully
 */
// ** update  todo 
todoRoute.put("/todos/:id", auth, update);






/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 */
// ** delete todo 
todoRoute.delete("/todos/:id", auth, removeTodo);

export default todoRoute