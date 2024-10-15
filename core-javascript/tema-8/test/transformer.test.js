/* eslint-disable indent */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { title, StringTransformer } from './transformer.js';

describe('title function', () => {
    test('should capitalize the first letter of each word', () => {
        expect(title('hello world')).toBe('Hello World');
        expect(title('tEsT StrIng')).toBe('Test String');
        expect(title('MULTIPLE    SPACES')).toBe('Multiple Spaces');
    });
});

describe('StringTransformer class', () => {
    let transformer;

    beforeEach(() => {
        transformer = new StringTransformer('Hello World');
    });

    test('should convert the string to a character array', () => {
        expect(transformer.toCharArray()).toEqual(['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']);
    });

    test('should randomize the order of characters', () => {
        const randomOrder = transformer.randomOrder();
        expect(randomOrder.length).toBe(transformer.initialString.length);
        expect(randomOrder).not.toBe(transformer.initialString);
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
