import {Student} from '../../interfaces';
import {create} from '../../controllers/studentController';
import {ConversationV3} from '@assistant/conversation';
import jwt from 'jsonwebtoken';

async function accountLinking(conv: ConversationV3) {
  const token = conv.headers.authorization;

  console.log(token);
  const decoded = (jwt.decode(token as string) as { [key: string]: any });

  if (decoded.aud === process.env.CLIENT_ID) {
    console.log(decoded);
  }

  const studentProps: Student = {
    name: decoded.name,
    email: decoded.email,
    sub: decoded.sub,
  };

  // Teste de persistência no banco de dados
  await create(studentProps);

  conv.add(`Olá, ${decoded.name}`);
}

export default accountLinking;
