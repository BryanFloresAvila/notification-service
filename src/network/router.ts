import httpErrors from 'http-errors'
import { Application, Response, Request, Router, NextFunction } from 'express'
import { Alive, Notification } from './routes'
import { response } from './response'

const routers = [Notification]

const applyRoutes = (app: Application): void => {
  app.use('/', Alive)
  routers.forEach((router: Router): Application => app.use('/api', router))

  // Handling 404 error
  app.use((req: Request, res: Response, next: NextFunction) => {
    next(new httpErrors.NotFound('This route does not exist'))
  })
  app.use(
    (
      error: httpErrors.HttpError,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      response({
        error: true,
        message: error.message,
        res,
        status: error.status
      })
      next()
    }
  )
}

export { applyRoutes }
