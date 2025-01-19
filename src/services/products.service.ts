import ProduductType from '../types/products.type'
import prisma from '../utils/client'

export const getAllProductService = async (): Promise<any> => {
  const data = await prisma.product.findMany()
  return data
}

export const getProductByIdService = async (id: number): Promise<any> => {
  const data = await prisma.product.findUnique({
    where: {
      id: id
    }
  })
  return data
}

export const createProductSercvice = async (
  payload: ProduductType
): Promise<ProduductType> => {
  const data = await prisma.product.create({
    data: payload
  })

  return data
}

export const updateProductService = async (
  payload: ProduductType
): Promise<ProduductType> => {
  const data = await prisma.product.update({
    where: {
      id: payload.id
    },
    data: { ...payload }
  })
  return data
}

export const deleteProductService = async (id: number): Promise<any> => {
  const data = await prisma.product.delete({
    where: {
      id: id
    }
  })
  return data
}
