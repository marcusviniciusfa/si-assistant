import { now, subtract } from '../../utils/dateFormatter'
import { ConversationV3 } from '@assistant/conversation'

function greeting (conv: ConversationV3) {
  const lastInteraction = now(conv.user.lastSeenTime)
  const time = subtract(20, 'seconds')

  console.log(conv)
  console.log('conv._internal.orig.user:', conv._internal.orig.user)

  if (lastInteraction <= time) {
    const ssml = '<speak>Olá! Sou a Sisin, Assistente de voz do curso Sistemas de Informação. <p>Posso ajudar você com assuntos do curso.</p></speak>'
    conv.add(ssml)
    conv.add('O que gostaria de saber?')

    return
  }

  const ssml = '<speak><emphasis level="strong">Olá novamente!</emphasis></speak>'
  conv.add(ssml)
  conv.add('O que gostaria de saber?')
}

export default greeting
