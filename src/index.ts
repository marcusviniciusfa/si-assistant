import app from './app'

const port = process.env.PORT
export { port }

app.listen(port, () => {
  console.log(`Webhook serving at port ${port}`)
})
