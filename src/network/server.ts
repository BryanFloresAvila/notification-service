import express from 'express'

import { applyRoutes } from './router'

class Server {
  private app: express.Application

  constructor() {
    this.app = express()
    this.config()
  }

  private config() {
    this.app.set('port', (process.env.PORT as string) || 3000)
    this.app.use(express.json())
    this.app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
        res.header('Access-Control-Allow-Origin', '*')
        res.header(
          'Access-Control-Allow-Headers',
          'Authorization, Content-Type'
        )
        next()
      }
    )
    applyRoutes(this.app)
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server is running on port', this.app.get('port'))
    })
  }
}

const server = new Server()

export { server as Server }
