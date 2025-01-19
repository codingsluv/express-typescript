import { Request, Response, Router } from "express";

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

export default productRouter;

