import { Router } from "express";
import productRouter from "./products";
const app = Router();


// sample route https://localhost:7000/api/products
app.use("/api", productRouter);


export default app;