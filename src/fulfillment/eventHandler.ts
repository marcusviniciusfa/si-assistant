import { conversation } from '@assistant/conversation'
// import eventSample from './events/eventSample'
import greeting from './events/greeting'
import documents from './events/documents'
import sigaaProfile from './events/sigaaProfile'
import accountLinking from './events/accountLinking'

const event = conversation()

/** Exemplo */
// event.handle('', conv => {
//   return eventSample(conv)
// })

event.handle('greeting', conv => greeting(conv))

event.handle('documents', conv => documents(conv))

event.handle('sigaaProfile', async conv => await sigaaProfile(conv))

event.handle('accountLinking', async conv => await accountLinking(conv))

export default event
