import express from 'express'
import routes from '@routes/routes'
// import { Sigaa } from 'sigaa-api'

const app = express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(routes)

app.listen(process.env.PORT, () => {
  console.log('Serving at port 3000')
})
