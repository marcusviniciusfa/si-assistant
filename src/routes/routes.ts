import Routes, { Request, Response } from 'express'
import handler from '@fullfilment/handler'

const routes = Routes()

/** Webhook */
routes.post('/webhook', async (_req: Request, res: Response) => {
  return handler(_req, res)
})

export default routes
