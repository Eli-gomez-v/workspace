/* eslint-disable indent */
const capitalizeLastName = require('./capitalizeLastName');

describe('capitalizeLastName', () => {
    it('should capitalize the first name and uppercase the last name', () => {
        expect(capitalizeLastName('john doe')).toBe('John DOE');
    });

    it('should throw a TypeError if input is not a string', () => {
        expect(() => capitalizeLastName(123)).toThrow(TypeError);
    });

    it('should throw an Error if there are not exactly two words', () => {
        expect(() => capitalizeLastName('john')).toThrow(Error);
        expect(() => capitalizeLastName('john doe smith')).toThrow(Error);
    });
});
