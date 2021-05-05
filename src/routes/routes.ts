import Routes from 'express'
import eventHandler from '@fulfillment/eventHandler'

const routes = Routes()

/** Fulfillment */
routes.post('/fulfillment', eventHandler)

export default routes
