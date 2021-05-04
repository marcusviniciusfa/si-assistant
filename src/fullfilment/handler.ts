import { Response, Request } from 'express'
import { conversation, Link } from '@assistant/conversation'

function fullfilment (req: Request, res: Response): object {
  console.log(req.body)

  const app = conversation()

  app.handle('Main invocation', conv => {
    conv.add('Para saber mais sobre os preços usando o Firebase acesse o link')
    conv.add(new Link({
      name: 'Firebase prices',
      open: {
        url: 'https://firebase.google.com/pricing?authuser=4'
      }
    }))
  })

  return res.status(200).json({ app })
}

export default fullfilment
