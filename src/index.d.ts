import { DtoNotification } from './dto-interfaces'

declare module 'express' {
  interface Request {
    body: DtoNotification | null
  }
}
