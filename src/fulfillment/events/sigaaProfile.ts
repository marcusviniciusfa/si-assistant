import { ConversationV3, Card } from '@assistant/conversation'
import { InstituionType, Sigaa } from 'sigaa-api'
import { nameFormatter } from '../../utils/nameFormatter'

async function sigaaProfile (conv: ConversationV3) {
  const username = ''
  const password = ''

  const sigaa = new Sigaa({
    url: process.env.SIGAA_URL,
    institution: process.env.SIGAA_INSTITUITION as InstituionType
  })

  const account = await sigaa.login(username, password) // login

  console.log('> Nome: ' + (await account.getName()))
  console.log('> Url foto: ' + (await account.getProfilePictureURL()))

  const name = await account.getName()
  const image = await account.getProfilePictureURL()

  // Resposta da Action
  conv.add(`Olá ${nameFormatter(name, 'full')}!`)

  conv.add(new Card({
    image: {
      url: String(image),
      alt: 'Foto do perfil do aluno no SIGAA'
    }
  }))

  // Encerra a sessão
  await account.logoff()
}

export default sigaaProfile
