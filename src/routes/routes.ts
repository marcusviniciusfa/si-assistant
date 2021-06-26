import Routes from 'express'
import eventHandler from '@fulfillment/eventHandler'

const routes = Routes()

routes.get('/', (_req, res) => {
  res.status(200)
    .send('<p>Werbhook is live on endpoint <strong>/webhook</strong><p>')
})

/** Fulfillment */
routes.post('/webhook', eventHandler)

export default routes
