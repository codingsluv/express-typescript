import UserType from '../types/users.type'
import joi from 'joi'

export const inputUserValidation = (payload: UserType): any => {
  const schema = joi.object({
    id: joi.number().required(),
    name: joi.string().trim().required().messages({
      'string.empty': 'Name is required',
      'string.base': 'Name must be a string',
      'any.required': 'Name is required'
    }),
    email: joi.string().trim().email().required().messages({
      'string.empty': 'Email is required',
      'string.base': 'Email must be a string',
      'any.required': 'Email is required'
    }),
    password: joi.string().trim().required().messages({
      'string.empty': 'Password is required',
      'string.base': 'Password must be a string',
      'any.required': 'Password is required'
    })
  })
  return schema.validate(payload)
}
