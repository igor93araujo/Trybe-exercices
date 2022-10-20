const sum = require('./sum');

describe('verificaSoma', () => {
  test('verifica a soma de 4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
});