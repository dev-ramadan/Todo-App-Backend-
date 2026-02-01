import express from "express"
import connection from "./db/connection.js"
import authRoute from "./routes/auth.route.js";
import todoRoute from "./routes/todo.route.js";
import userRoute from "./routes/user.route.js";
import cors from "cors"
import { errorHandel } from "./utils/errorHandeler.js";
const root = async (app) => {
    app.use(express.json())
    app.use(cors())
    await connection();

    app.use(authRoute);
    app.use(todoRoute);
    app.use(userRoute)
    

    app.use(errorHandel)
}
export default root