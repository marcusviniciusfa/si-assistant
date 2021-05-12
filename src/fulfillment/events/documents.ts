import { ConversationV3, CollectionBrowse, Suggestion } from '@assistant/conversation'
import { IntentParameterValue } from '@assistant/conversation/dist/api/schema'

const size = { height: 2, width: 2 }

const suggestions: Suggestion[] = [
  new Suggestion({ title: 'Sim' }),
  new Suggestion({ title: 'Não' })
]

function documents (conv: ConversationV3) {
  const documentType: IntentParameterValue = conv.intent.params.documents

  const lastMessage = 'Posso ajudar com mais alguma coisa?'

  if (documentType) {
    const additionalMessage = `Abaixo estão todos os documentos e informações sobre ${documentType.original}.`

    switch (documentType.resolved) {
      case 'estagio':
        conv.add('Joelson, é o atual coordenador de Estágio, você pode procurá-lo através do email, joelson@dcx.ufpb.br. ' + additionalMessage)
        conv.add(...suggestions)
        conv.add(lastMessage)

        conv.add(new CollectionBrowse({
          items: [
            {
              description: 'Informações simplificadas, no site',
              openUriAction: {
                url: 'https://si.dcx.ufpb.br/estagio-e-tcc/'
              },
              image: {
                url: 'https://storage.googleapis.com/si-assistant/icons/link_red_24dp.png',
                alt: 'icon_red_link',
                ...size
              }
            },
            {
              description: 'Regulamento do Estágio Supervisionado',
              openUriAction: {
                url: 'https://si.dcx.ufpb.br/wp-content/uploads/2015/12/regulamento-estagio-supervisionado-fevereiro-2009.pdf'
              },
              image: {
                url: 'https://storage.googleapis.com/si-assistant/icons/link_red_24dp.png',
                alt: 'icon_red_link',
                ...size
              }
            },
            {
              description: 'Plano de Atividades de Estágio Obrigatório',
              openUriAction: {
                url: 'https://si.dcx.ufpb.br/wp-content/uploads/2015/12/PAE-obrigatorio.pdf'
              },
              image: {
                url: 'https://storage.googleapis.com/si-assistant/icons/link_red_24dp.png',
                alt: 'icon_red_link',
                ...size
              }
            },
            {
              description: 'Plano de Atividades de Estágio Não Obrigatório',
              openUriAction: {
                url: 'https://si.dcx.ufpb.br/wp-content/uploads/2015/12/PAE-nao-obrigatorio.pdf'
              },
              image: {
                url: 'https://storage.googleapis.com/si-assistant/icons/link_red_24dp.png',
                alt: 'icon_red_link',
                ...size
              }
            },
            {
              description: 'Termo de Compromisso de Estágio Obrigatório',
              openUriAction: {
                url: 'https://si.dcx.ufpb.br/wp-content/uploads/2015/12/TCE-obrigatorio.pdf'
              },
              image: {
                url: 'https://storage.googleapis.com/si-assistant/icons/link_red_24dp.png',
                alt: 'icon_red_link',
                ...size
              }
            },
            {
              description: 'Termo de Compromisso de Estágio Não Obrigatório',
              openUriAction: {
                url: 'https://si.dcx.ufpb.br/wp-content/uploads/2015/12/TCE-nao-obrigatorio.pdf'
              },
              image: {
                url: 'https://storage.googleapis.com/si-assistant/icons/link_red_24dp.png',
                alt: 'icon_red_link',
                ...size
              }
            },
            {
              description: 'Termo de Aceite do Orientador',
              openUriAction: {
                url: 'https://si.dcx.ufpb.br/wp-content/uploads/2015/12/termo-aceite-orientador-estagio.doc'
              },
              image: {
                url: 'https://storage.googleapis.com/si-assistant/icons/link_red_24dp.png',
                alt: 'icon_red_link',
                ...size
              }
            }
          ]
        }))

        return
      case 'tcc':
        conv.add('Alexandre Scaico, é o atual coordenador de TCC, você pode procurá-lo através do email, alexandre@dcx.ufpb.br. ' + additionalMessage)
        conv.add(...suggestions)
        conv.add(lastMessage)

        // Links de TCC
        conv.add(new CollectionBrowse({
          items: [
            {
              description: 'Regulamento de Trabalho de Conclusão de Curso',
              openUriAction: {
                url: 'https://si.dcx.ufpb.br/wp-content/uploads/2020/12/Regulamento-TCC_SI-01_2020-1.pdf'
              },
              image: {
                url: 'https://storage.googleapis.com/si-assistant/icons/link_red_24dp.png',
                alt: 'icon_red_link',
                ...size
              }
            },
            {
              description: 'Termo de Aceite do Orientador',
              openUriAction: {
                url: 'https://si.dcx.ufpb.br/wp-content/uploads/2015/12/termo-aceite-orientador-tcc.doc'
              },
              image: {
                url: 'https://storage.googleapis.com/si-assistant/icons/link_red_24dp.png',
                alt: 'icon_red_link',
                ...size
              }
            },
            {
              description: 'TCCs defendidos',
              openUriAction: {
                url: 'https://si.dcx.ufpb.br/tccs-defendidos/'
              },
              image: {
                url: 'https://storage.googleapis.com/si-assistant/icons/link_red_24dp.png',
                alt: 'icon_red_link',
                ...size
              }
            }
          ]
        }))

        return
      case 'atividades complementares':
        conv.add('O email da coordenação é, coordenacaosi@dce.ufpb.br. ' + additionalMessage)
        conv.add(...suggestions)
        conv.add(lastMessage)

        // Links de Atividades Complementares
        conv.add(new CollectionBrowse({
          items: [
            {
              description: 'Regulamento sobre Atividades Complementares',
              openUriAction: {
                url: 'https://si.dcx.ufpb.br/wp-content/uploads/2015/12/Regulamento_01_2016-topicosEspeciais.pdf'
              },
              image: {
                url: 'https://storage.googleapis.com/si-assistant/icons/link_red_24dp.png',
                alt: 'icon_red_link',
                ...size
              }
            },
            {
              description: 'Complementar - Decisão sobre cômputo de horas para participação do Programa de Aluno Apoiador (CIA/UFPB)',
              openUriAction: {
                url: 'https://si.dcx.ufpb.br/wp-content/uploads/2019/11/4-Aprova%C3%A7%C3%A3o-Modifica%C3%A7%C3%A3o-Regulamento-Atividades-Complementares.pdf'
              },
              image: {
                url: 'https://storage.googleapis.com/si-assistant/icons/link_red_24dp.png',
                alt: 'icon_red_link',
                ...size
              }
            }
          ]
        }))

        return
      default:
        break
    }
  }

  conv.add('É possível encontrar todos os documentos e resoluções do curso no link abaixo')
  conv.add(...suggestions)
  conv.add(lastMessage)

  conv.add(new CollectionBrowse({
    items: [
      {
        description: 'Documentos',
        openUriAction: {
          url: 'https://si.dcx.ufpb.br/documentos/'
        },
        image: {
          url: 'https://storage.googleapis.com/si-assistant/icons/link_red_24dp.png',
          alt: 'icon_red_link',
          ...size
        }
      }
    ]
  }))
}

export default documents
