/* eslint-disable import/extensions */
const generateMultiples = require('../src/generateMultiples.js');

describe('generateMultiples', () => {

  test('Debe devolver un array de tamaño 4 con múltiplos de 2', () => {
    expect(generateMultiples(4, 2)).toEqual([2, 4, 6, 8]);
  });

  test('Debe devolver un array de tamaño 3 con múltiplos de 5', () => {
    expect(generateMultiples(3, 5)).toEqual([5, 10, 15]);
  });

  test('Debe devolver un array vacío si el tamaño es 0', () => {
    expect(generateMultiples(0, 5)).toEqual([]);
  });

  test('Debe manejar números negativos', () => {
    expect(generateMultiples(3, -2)).toEqual([-2, -4, -6]);
  });

  test('Debe devolver un array vacío si el input es inválido (NaN)', () => {
    expect(generateMultiples('invalid', 5)).toEqual([]);
  });

  test('Debe devolver un array vacío si no se pasa un número', () => {
    expect(generateMultiples(3, 'invalid')).toEqual([]);
  });
  
});
