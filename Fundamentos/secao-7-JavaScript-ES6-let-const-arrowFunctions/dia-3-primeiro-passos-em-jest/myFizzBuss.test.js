const myFizzBuzz = require('./sum');

describe('Testa função fizzBuzz', () => {
  /* Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado */
  it('Verifica se um numero divisivel por 3 e 5 retorna "fizzbuzz".', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  /* Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado */
  it('Verifica se o numero divisivel por 3 apenas e retorna "fizz".', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  /* Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado */
  it('Verifica se o numero divisivel apenas por 5 retorna "buzz".', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  /* Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado */
  it('Verifica se o numero nao divisivel por 3 nem 5 e retorna "false".', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });
  /* Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */
  it('Verifica se a chamada não é número e retorna o "false"', () => {
    expect(myFizzBuzz('a')).toBeFalsy();
  });
});
