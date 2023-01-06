import { Response, Request, Router } from 'express'

const Alive = Router()

Alive.route('').get((req: Request, res: Response) => {
  res.send(' this is alive route ')
})

export { Alive }
