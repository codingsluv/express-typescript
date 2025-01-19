import express, { Application, Request, Response } from "express";
import "dotenv/config";

const app:Application = express()
const PORT:number = process.env.PORT != null ? Number(process.env.PORT) : 3000

app.get("/", (req:Request, res:Response) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})