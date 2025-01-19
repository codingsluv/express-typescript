import { NextFunction, Request, Response, Router } from "express";
import { createProduct, getAllProducts } from "../controllers/products.controller";

const productRouter:Router = Router();

productRouter.get("/products", (req:Request, res:Response, next:NextFunction) => {
    getAllProducts(req, res, next)
})

productRouter.post("/products", (req:Request, res:Response, next:NextFunction) => {
    createProduct(req, res, next)
})

export default productRouter;

