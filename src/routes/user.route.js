import { Router } from "express";
import { editUser, getAll, getById, removeUser } from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const userRoute = Router();

// ** SWAGGER COMMINT 
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management routes
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users (admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 *       401:
 *         description: Unauthorized, only admin can access
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User info
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user info or role
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 description: Only admin can update role ('user' or 'admin')
 *               name:
 *                 type: string
 *                 description: User name (can update their own name)
 *               email:
 *                 type: string
 *                 description: User email (can update their own email)
 *               phone:
 *                 type: string
 *                 description: User phone (can update their own phone)
 *     responses:
 *       201:
 *         description: User updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /users/role/{id}:
 *   put:
 *     summary: Update user role (admin only)
 *     tags: [Role]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 description: Only admin can update role ('user' or 'admin')
 *     responses:
 *       201:
 *         description: User role updated successfully
 *       401:
 *         description: Unauthorized, only admin can update role
 *       404:
 *         description: User not found
 */

// ** ========= end Commint ========== **


// ** get all users 
userRoute.get("/users",auth,getAll);

// ** get  user by id 
userRoute.get("/users/:id",getById);

// ** update  user 
userRoute.put("/users/:id",auth,editUser);

// ** delete user 
userRoute.delete("/users/:id",removeUser);

export default userRoute