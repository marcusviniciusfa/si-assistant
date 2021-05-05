import { conversation } from '@assistant/conversation'
import eventSample from './events/eventSample'

const event = conversation()

event.handle('greeting', conv => {
  // console.log(conv.user)
  return eventSample(conv)
})

export default event
