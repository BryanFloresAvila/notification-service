import httpErrors from 'http-errors'
import { Application, Response, Request, Router, NextFunction } from 'express'
import { Alive, Notification } from './routes'

const routers = [Notification]

const applyRoutes = (app: Application): void => {
  app.use('/', Alive)
  routers.forEach((router: Router): Application => app.use('/api', router))

  // Handling 404 error
  app.use((req: Request, res: Response, next: NextFunction) => {
    next(new httpErrors.NotFound('This route does not exist'))
  })
}

export { applyRoutes }
