import { Response, Request, Router, NextFunction } from 'express'
import { Notification as NotificationC } from '../../controllers'
import { DtoNotification } from 'dto-interfaces'
import { response as responseC } from 'network'
import { validateNotification } from './middlewares'
const Notification = Router()

Notification.route('/notification/sendNotification').post(
  validateNotification,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dtoNotification: DtoNotification = req.body
      const notification = new NotificationC(dtoNotification)
      const response = await notification.sendNotification()
      responseC({
        error: false,
        message: response,
        res,
        status: 200
      })
    } catch (error) {
      next(error)
    }
  }
)

export { Notification }
