const fizzBuzz = require('../ejercicio_fizzBuzz/fizzbuzz');

test('returns fizz for multiples of 3', () => {
  expect(fizzBuzz(3)).toBe('fizz');
  expect(fizzBuzz(9)).toBe('fizz');
});

test('returns buzz for multiples of 5', () => {
  expect(fizzBuzz(5)).toBe('buzz');
  expect(fizzBuzz(20)).toBe('buzz');
});

test('returns fizzbuzz for multiples of 3 and 5', () => {
  expect(fizzBuzz(15)).toBe('fizzbuzz');
  expect(fizzBuzz(30)).toBe('fizzbuzz');
});

test('returns the number as a string if not a multiple of 3 or 5', () => {
  expect(fizzBuzz(7)).toBe('7');
  expect(fizzBuzz(22)).toBe('22');
});

test('returns "Not a number" if input is not a number', () => {
  expect(fizzBuzz('hola')).toBe('Not a number');
  expect(fizzBuzz(null)).toBe('Not a number');
  expect(fizzBuzz(undefined)).toBe('Not a number');
});
