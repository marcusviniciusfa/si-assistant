function sum (a, b) {
  return a + b
}

/**
 * Teste padrão simples, apenas para fim de exemplificar o uso
 */
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
