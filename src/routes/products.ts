import { Request, Response, Router } from "express";
import { inputProductsValidation } from "../validation/products.validation";

const productRouter:Router = Router();

productRouter.get("/products", (req:Request, res:Response) => {
    res.status(200).json({
        message: "Product list was successfully",
        products: [
            {
                id: 1,
                nameProduct: "Iphone 14",
                price: 10000,
            },
            {
                id: 2,
                nameProduct: "Iphone 14 Pro",
                price: 12000,
            }
        ]
    })
})

productRouter.post("/products", (req:Request, res:Response) => {
    const { error, value } = inputProductsValidation(req.body);
    if(error != null) {
        res.status(400).json({
            message: "Validation error",
            error: error.details[0].message,
            data: value
        })
    }
    else {
        res.status(200).json({
            message: "Product was successfully",
            error: null,
            data: value
        })
    }
})

export default productRouter;

