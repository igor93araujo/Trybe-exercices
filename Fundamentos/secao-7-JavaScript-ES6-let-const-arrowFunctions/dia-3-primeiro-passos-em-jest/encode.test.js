const {encode, decode} = require('./sum');

describe('Verificações de funções encode e decode', () => {
  /* Teste se encode e decode são funções; */
  it('Verifica se encode e decode sao funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  /* Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente; */
  it('Verifica se a,e,i,o,u sao convertidas em 1,2,3,4,5', () =>{
    expect(encode('aeiou')).toEqual('12345');
   
  });
  /* Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente; */
  it('Verifica se 1,2,3,4,5 é convertodo em a,e,i,o,u', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  /* Teste se as demais letras/números não são convertidos para cada caso; */
  it('Verifica se demais letras e números não sao convertidas', () => {
    expect(encode('eu te amo')).toEqual('25 t2 1m4');
  });
  /* Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro. */
  it('Verifica se a string tem o mesmo tamanho do parametro', () => {
    expect(encode('test').length).toEqual(4);
  });
});