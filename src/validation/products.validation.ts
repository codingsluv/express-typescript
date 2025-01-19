import joi from "joi";
import type ProduductType from "../types/products.type";

export const inputProductsValidation = (payload: ProduductType): joi.ValidationResult<ProduductType> => {
    const schema = joi.object({
        id: joi.number().required(),
        nameProduct: joi.string().trim().required().messages({
            "string.empty": "Name product is required",
            "string.base": "Name product must be a string",
            "any.required": "Name product is required",
        }),
        price: joi.number().required().messages({
            "number.base": "Price must be a number",
            "any.required": "Price is required",
            "number.min": "Price must be greater than 0",
        }),
        stock: joi.number().required().messages({
            "number.base": "Stock must be a number",
            "any.required": "Stock is required",
            "number.min": "Stock must be greater than 0",
        }),
    });
    return schema.validate(payload);
}