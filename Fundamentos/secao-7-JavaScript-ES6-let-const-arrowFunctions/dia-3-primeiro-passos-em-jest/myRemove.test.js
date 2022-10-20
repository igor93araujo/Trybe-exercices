const myRemove = require('./sum');
/* A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array */
describe('verificação de array', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  /* Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4] */
  it('Verifica se não remove o array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  /* Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */
  it('Verifica se retorna [1,2,3,4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4]);
  })
});