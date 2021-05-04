/**
 * @description Recebe um nome completo, em qualquer
 * formato, e retorna o primeiro nome na formatação
 * padrão (Inicial maiúscula e as demais letras minúsculas)
 * @param name Nome que deve ser formatado
 * @returns O primeiro nome seguindo a formatação padrão
 */
function firstName (name: string) {
  // Pega o primeiro nome
  name = name
    .split(' ')[0]
    .toLowerCase()

  // Formata no padrão: maiúscula + minusculas
  name = name
    .charAt(0)
    .toUpperCase() +
    name
      .slice(1)

  return name
}

/**
 * @description Recebe um nome completo, em qualquer
 * formato, e retorna o sobrenome (último nome) nome na formatação
 * padrão (Inicial maiúscula e as demais letras minúsculas)
 * @param name Nome que deve ser formatado
 * @returns O sobrenome nome seguindo a formatação padrão
 */
function lastName (name: string) {
  // Pega o sobrenome
  name = name
    .split(' ')[1]
    .toLowerCase()

  // Formata no padrão: maiúscula + minusculas
  name = name
    .charAt(0)
    .toUpperCase() +
    name
      .slice(1)

  return name
}

/**
 * @description Recebe um nome completo, em qualquer
 * formato, e retorna nome + sobrenome na formatação
 * padrão (Inicial maiúscula e as demais letras minúsculas)
 * @param name Nome que deve ser formatado
 * @returns O nome e sobrenome, seguindo a formatação padrão
 */
function fullName (name: string) {
  return firstName(name) + ' ' + lastName(name)
}

export { firstName, lastName, fullName }
