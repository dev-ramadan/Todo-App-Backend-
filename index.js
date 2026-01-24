import dotenv from "dotenv"
import express from "express"
import root from "./src/main.js"
import path from "path"
import { swaggerDocs } from "./swagger.js"
dotenv.config({
    path: path.resolve(process.cwd(), ".env")
})
const app = express();
const port = process.env.PORT;
(async () => {
    await root(app);
    swaggerDocs(app,port)
    app.listen(port, () => {
        console.log("server is running at port =>", port);
    })
})()