import express from 'express'
import routes from '@routes/routes'
// import { Sigaa } from 'sigaa-api'

const port = process.env.PORT

const app = express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(routes)

app.listen(port, () => {
  console.log(`Webhook serving at port ${port}`)
})
