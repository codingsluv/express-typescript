import { NextFunction, Request, Response } from 'express'
import { inputProductsValidation } from '../validation/products.validation'

export const getAllProducts = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  try {
    res.status(200).json({
      message: 'Product list was successfully',
      products: [
        {
          id: 1,
          nameProduct: 'Iphone 14',
          price: 10000,
          stock: 10
        },
        {
          id: 2,
          nameProduct: 'Iphone 14 Pro',
          price: 12000,
          stock: 10
        },
        {
          id: 3,
          nameProduct: 'Iphone 14 Pro Max',
          price: 15000,
          stock: 10
        }
      ]
    })
  } catch (error: Error | any) {
    next(
      new Error('Error occured while getting all products :' + error.message)
    )
  }
}

export const createProduct = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  try {
    const { error, value } = inputProductsValidation(req.body)
    if (error != null) {
      res.status(400).json({
        message: 'Validation error',
        error: error.details[0].message,
        data: value
      })
    } else {
      res.status(200).json({
        message: 'Product created was successfully',
        error: null,
        data: value
      })
    }
  } catch (error: Error | any) {
    next(new Error('Error occured while creating product :' + error.message))
  }
}
