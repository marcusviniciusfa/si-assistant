/**
 * @description Recebe um nome completo, em qualquer
 * formato, e retorna na formatação padrão
 * (Inicial maiúscula e as demais letras minúsculas)
 * @param name Nome que deve ser formatado
 * @param index Índice que especifica qual nome irá formatar
 * @returns Nome seguindo a formatação padrão
 */
function subName (name: string, index: number = 0) {
  // Pega o primeiro nome
  name = name
    .split(' ')[index]
    .toLowerCase()

  // Formata no padrão: inicial maiúscula + restante das letras em minuscula
  name = name
    .charAt(0)
    .toUpperCase() +
    name
      .slice(1)

  return name
}

/**
 * @description Recebe um nome completo, em qualquer
 * formato, e retorna o nome formatado em algum desse tipos:
 * - Primeiro nome (first)
 * - Último nome (last)
 * - Nome completo (full)
 *
 * A formatação segue o padrão (Inicial maiúscula e o restante da letras em minuscula)
 * @param name Nome que deve ser formatado
 * @param {'first'|'last'|'full'} format Formato de nome da saída:
 * `first`, `last` ou `full`
 * @returns Nome formatado conforme passado no parâmetro `format`
 */
function nameFormatter (name: string, format?: 'first'|'last'|'full') {
  switch (format) {
    case 'first':
      return subName(name, 0)
    case 'last':
      return subName(name, 1)
    case 'full':
    default:
      return subName(name, 0) + ' ' + subName(name, 1)
  }
}

export { nameFormatter, subName }
