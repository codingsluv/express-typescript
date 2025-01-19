import express, { Application, Request, Response } from "express";
import "dotenv/config";
import appMiddlewares from "./middlewares";

const app:Application = express()
const PORT:number = process.env.PORT != null ? Number(process.env.PORT) : 3000

app.use(appMiddlewares)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})