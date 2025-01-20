import prisma from '../utils/client'

export const getAllUsersService = async (): Promise<any> => {
  const data = await prisma.user.findMany()
  return data
}

export const getUserByIdService = async (id: number): Promise<any> => {
  const data = await prisma.user.findUnique({
    where: {
      id: id
    }
  })
  return data
}

export const createUserService = async (payload: any): Promise<any> => {
  const data = await prisma.user.create({
    data: payload
  })
  return data
}

export const updateUserService = async (payload: any): Promise<any> => {
  const data = await prisma.user.update({
    where: {
      id: payload.id
    },
    data: { ...payload }
  })
  return data
}

export const deleteUserService = async (id: number): Promise<any> => {
  const data = await prisma.user.delete({
    where: {
      id: id
    }
  })
  return data
}
