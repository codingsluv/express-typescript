import { NextFunction, Request, Response } from 'express'
import prisma from '../utils/client'
import {
  createUserService,
  deleteUserService,
  getUserByIdService,
  updateUserService
} from '../services/users.service'
import { inputUserValidation } from '../validation/users.validation'

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const data = await prisma.user.findMany()
    return res.status(200).json({
      message: 'User list was successfully',
      error: null,
      users: data
    })
  } catch (error: Error | any) {
    next(new Error('Error occured while getting all users :' + error.message))
  }
}

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const { id } = req.params
  const data = await getUserByIdService(parseInt(id))
  return res.status(200).json({
    message: 'User list by id',
    error: null,
    users: data
  })
}

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { error, value } = inputUserValidation(req.body)
    if (error != null) {
      res.status(400).json({
        message: 'Validation error',
        error: error.details[0].message,
        data: value
      })
    }
    const data = await createUserService(req.body)
    return res.status(200).json({
      message: 'User created was successfully',
      error: null,
      data: data
    })
  } catch (error: Error | any) {
    next(new Error('Error occured while creating user :' + error.message))
  }
}

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const { error, value } = inputUserValidation(req.body)
    if (error != null) {
      res.status(400).json({
        message: 'Validation error',
        error: error.details[0].message,
        data: value
      })
    }
    const data = await updateUserService({
      ...req.body,
      id: parseInt(id)
    })
    return res.status(200).json({
      message: 'User updated was successfully',
      error: null,
      data: data
    })
  } catch (error: Error | any) {
    next(new Error('Error occured while updating user :' + error.message))
  }
}

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const data = await deleteUserService(parseInt(id))
    return res.status(200).json({
      message: 'User deleted was successfully',
      error: null,
      data: data
    })
  } catch (error: Error | any) {
    next(new Error('Error occured while deleting user :' + error.message))
  }
}
