import { now, subtract } from '@utils/dateFormatter'
import { ConversationV3 } from '@assistant/conversation'

function greeting (conv: ConversationV3) {
  const lastInteraction = now(conv.user.lastSeenTime)
  const time = subtract(30, 'minutes')

  if (lastInteraction <= time) {
    conv.add('Olá! Sou a assistente virtual do curso Sistemas de Informação. Posso ajudar você com assuntos do curso.')
    conv.add('O que gostaria de saber?')

    return
  }

  conv.add('Olá novamente! O que gostaria de saber?')
}

export default greeting
