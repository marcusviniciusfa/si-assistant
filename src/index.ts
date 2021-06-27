import app from './app'

const port = process.env.PORT || 3000
export { port }

app.listen(port, () => {
  console.log(`Webhook serving at port ${port}`)
})
