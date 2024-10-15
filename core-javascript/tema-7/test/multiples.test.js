// Import the function to test
const generateMultiples = require('../multiples');

test('Generates correct multiples for size 3 and num 2', () => {
  expect(generateMultiples(3, 2)).toEqual([2, 4, 6]);
});

test('Generates correct multiples for size 4 and num 5', () => {
  expect(generateMultiples(4, 5)).toEqual([5, 10, 15, 20]);
});

test('Returns empty array for size 0', () => {
  expect(generateMultiples(0, 3)).toEqual([]);
});

test('Generates correct multiples for size 1 and num 10', () => {
// eslint-disable-next-line indent
  expect(generateMultiples(1, 10)).toEqual([10]);
});
