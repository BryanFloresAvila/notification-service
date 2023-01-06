import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import httpErrors from 'http-errors'
import { DtoNotification } from 'dto-interfaces'
import { notification as notificationSchema } from 'schemas'

const validateNotification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dtoNotification: DtoNotification = req.body
    await notificationSchema.validateAsync(dtoNotification)
    next()
  } catch (e) {
    if (e instanceof Joi.ValidationError)
      next(new httpErrors.UnprocessableEntity(e.message))
    next(e)
  }
}
export { validateNotification }
