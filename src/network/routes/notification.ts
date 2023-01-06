import { Response, Request, Router } from 'express'
import { processData } from './middlewares'
import { Notification as NotificationC } from '../../controllers'
import { DtoNotification } from 'dto-interfaces'
const Notification = Router()

Notification.route('/notification/sendNotification').post(
  processData,
  (req: Request, res: Response) => {
    const notification = new NotificationC(req.body as DtoNotification)
    notification.sendNotification()
    res.send(' this is notification route ')
  }
)

export { Notification }
