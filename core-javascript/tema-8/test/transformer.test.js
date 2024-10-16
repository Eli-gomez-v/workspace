const { StringTransformer } = require('../transformer.js');

describe('StringTransformer class', () => {
  let transformer;

  beforeEach(() => {
    transformer = new StringTransformer('Hello World');
  });

  test('should convert the string to a character array', () => {
    expect(transformer.toCharArray()).toEqual(['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']);
  });

  test('should reverse the order of characters', () => {
    expect(transformer.reverseOrder()).toBe('dlroW olleH');
  });

  test('should remove vowels from the string', () => {
    expect(transformer.removeVowels()).toBe('Hll Wrld');
  });

  test('should remove consonants from the string', () => {
    expect(transformer.removeConsonants()).toBe('eo o');
  });

  test('should convert the string into a word array', () => {
    expect(transformer.toWordArray()).toEqual(['Hello', 'World']);
  });

  test('should invert the order of words in the string', () => {
    expect(transformer.invertWordOrder()).toBe('World Hello');
  });
});
