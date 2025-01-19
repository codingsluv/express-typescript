import { Router } from 'express'
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct
} from '../controllers/products.controller'
import AsyncHandler from 'express-async-handler'

const productRouter: Router = Router()

productRouter.get('/products', AsyncHandler(getAllProducts))
productRouter.get('/products/:id', AsyncHandler(getProductById))
productRouter.post('/products', AsyncHandler(createProduct))
productRouter.put('/products/:id', AsyncHandler(updateProduct))
productRouter.delete('/products/:id', AsyncHandler(deleteProduct))

export default productRouter
