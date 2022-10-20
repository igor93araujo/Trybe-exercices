const sum = require('./sum');

describe('verificaSoma', () => {
  test('verifica a soma de 4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  /* Teste se o retorno de sum(0, 0) é 0 */
  test('verifica se 0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  /* Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5) */
  it('Testar se sum lança erro com num e string', () => {
    expect(() => sum(4, '5')).toThrowError(); //reescrever a função dentro do expect
  });
  /* Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")*/
  it('Testar se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be number');
  });
});