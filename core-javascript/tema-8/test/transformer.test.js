/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const { StringTransformer } = require('./transformer'); // Ajusta esto a la ruta de tu archivo

describe('StringTransformer class', () => {
  let transformer;

  beforeEach(() => {
    transformer = new StringTransformer('Hello World');
  });

  test('should convert the string to a character array', () => {
    expect(transformer.toCharArray()).toEqual(['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']);
  });

  // Prueba para cubrir la función randomOrder
  test('should randomize the order of characters', () => {
    const randomized = transformer.randomOrder();
    // Verifica que el resultado tenga los mismos caracteres pero en un orden diferente
    expect(randomized).not.toBe('Hello World'); // Verifica que no sea el mismo orden
    expect(randomized.length).toBe(11); // Verifica que la longitud sea la misma
    expect([...randomized].sort()).toEqual([...transformer.initialString].sort());
  });
});
