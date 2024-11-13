// prueba de jest.suma.js
const suma = require('./jest.suma');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});
