const StringTransformer = require('../src/transformer');

describe('StringTransformer', () => {
  let transformer;

  beforeEach(() => {
    transformer = new StringTransformer('Hola Mundo');
  });

  test('Debe inicializarse correctamente con un texto', () => {
    expect(transformer.text).toBe('Hola Mundo');
  });

  test('Debe lanzar un error si el input no es un string', () => {
    expect(() => new StringTransformer(123)).toThrow('Input must be a string');
  });

  test('Debe añadir más texto correctamente', () => {
    transformer.add(' Programación');
    expect(transformer.text).toBe('Hola Mundo Programación');
  });

  test('Debe lanzar un error si el input añadido no es un string', () => {
    expect(() => transformer.add(123)).toThrow('Input must be a string');
  });

  test('Debe convertir a un array de caracteres', () => {
    expect(transformer.toCharArray()).toEqual(['H', 'o', 'l', 'a', ' ', 'M', 'u', 'n', 'd', 'o']);
  });

  test('Debe mezclar los caracteres aleatoriamente', () => {
    const shuffled = transformer.shuffleChars();
    expect(shuffled).not.toBe(transformer.text);
    expect(shuffled.length).toBe(transformer.text.length);
  });

  test('Debe manejar un string vacío en shufflechars', () => {
    transformer = new StringTransformer('');
    expect(transformer.shuffleChars()).toBe('');
  });

  test('Debe invertir el orden de los caracteres', () => {
    transformer.reverseChars();
    expect(transformer.text).toBe('odnuM aloH');
  });

  test('Debe eliminar las vocales', () => {
    transformer.removeVowels();
    expect(transformer.text).toBe('Hl Mnd');
  });

  test('Debe eliminar las consonantes', () => {
    transformer.removeConsonants();
    expect(transformer.text).toBe('oa uo');
  });

  test('Debe convertir en un array de palabras', () => {
    transformer.toWordArray();
    expect(transformer.text).toEqual(['Hola', 'Mundo']);
  });

  test('Debe devolver un array vacío para una cadena vacía', () => {
    transformer = new StringTransformer('  ');
    transformer.toWordArray();
    expect(transformer.text).toEqual([]);
  });

  test('Debe lanzar error en shuffleArray si el input no es un array', () => {
    expect(() => StringTransformer.shuffleArray('Hola')).toThrow('Input must be an array');
  });
});
