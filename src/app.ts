import express, { Express } from 'express'
import routes from '@routes/routes'

class AppController {
  public express: Express

  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express
      .use(express.json())
      .use(express.urlencoded({ extended: true }))
  }

  routes () {
    this.express.use(routes)
  }
}

export default new AppController().express
