const capitalizeLastName = require('../src/capitalizeLastName');

describe('capitalizeLastName function', () => {
  it('debería capitalizar el nombre y convertir el apellido en mayúsculas', () => {
    expect(capitalizeLastName('john doe')).toBe('John DOE');
  });

  it('debería lanzar un TypeError si el argumento no es una cadena', () => {
    expect(() => capitalizeLastName(123)).toThrow(TypeError);
  });

  it('debería lanzar un Error si no hay exactamente dos palabras', () => {
    expect(() => capitalizeLastName('john')).toThrow(Error);
    expect(() => capitalizeLastName('john doe smith')).toThrow(Error);
  });
});
