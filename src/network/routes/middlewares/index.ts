import { NextFunction, Request, Response } from 'express'
import { DtoNotification } from 'dto-interfaces'

const processData = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req
  // check if body is string
  if (typeof body !== 'string') return res.status(400).send('Bad Request')
  // remove single quation marks
  const textPlain: string = body.replace(/'/g, '')
  // split string into array
  const data = textPlain.split(',')
  // convert array to object dto-notification
  const notification: DtoNotification = {
    id: data[0],
    email: data[1],
    time: Number(data[2]),
    message: data[3]
  }
  req.body = notification
  next()
}
export { processData }
