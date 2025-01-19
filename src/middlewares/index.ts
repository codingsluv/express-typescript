import express from "express";
import cors from "cors";
import app from "../routes";
import "../utils/winston";


const appMiddlewares = express()

appMiddlewares.use(cors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    preflightContinue: false,

}))

appMiddlewares.options("*", cors())
appMiddlewares.use(express.json())
appMiddlewares.use(app)

export default appMiddlewares;
