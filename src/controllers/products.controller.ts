import { NextFunction, Request, response, Response } from 'express'
import { inputProductsValidation } from '../validation/products.validation'
import {
  createProductSercvice,
  deleteProductService,
  getAllProductService,
  getProductByIdService,
  updateProductService
} from '../services/products.service'

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const data = await getAllProductService()
    return res.status(200).json({
      message: 'Product list was successfully',
      error: null,
      products: data
    })
  } catch (error: Error | any) {
    next(
      new Error('Error occured while getting all products :' + error.message)
    )
  }
}

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params
    const data = await getProductByIdService(parseInt(id))
    return res.status(200).json({
      message: 'Product list by id',
      error: null,
      products: data
    })
  } catch (error: Error | any) {
    next(
      new Error('Error occured while getting all products :' + error.message)
    )
  }
}

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { error, value } = inputProductsValidation(req.body)
    if (error != null) {
      res.status(400).json({
        message: 'Validation error',
        error: error.details[0].message,
        data: value
      })
    }
    const data = await createProductSercvice(req.body)
    return res.status(200).json({
      message: 'Product created was successfully',
      error: null,
      data: data
    })
  } catch (error: Error | any) {
    next(new Error('Error occured while creating product :' + error.message))
  }
}

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params
    const { error, value } = inputProductsValidation(req.body)
    if (error != null) {
      res.status(400).json({
        message: 'Validation error',
        error: error.details[0].message,
        data: value
      })
    }
    const data = await updateProductService({
      ...req.body,
      id: parseInt(id)
    })
    return res.status(200).json({
      message: 'Product updated was successfully',
      error: null,
      data: data
    })
  } catch (error: Error | any) {
    next(new Error('Error occured while updating product :' + error.message))
  }
}

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params
    const data = await deleteProductService(parseInt(id))
    return res.status(200).json({
      message: 'Product deleted was successfully',
      error: null,
      data: data
    })
  } catch (error: Error | any) {
    next(new Error('Error occured while deleting product :' + error.message))
  }
}
