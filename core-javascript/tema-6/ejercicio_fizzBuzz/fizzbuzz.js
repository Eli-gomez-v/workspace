// Task write a Fx, fizzBuzz, accepts number and returning strings.
// 'fizz' if the number is divisible by 3;
// 'buzz' if the number is divisible by 5;
// 'fizzbuzz' if the number is divisible by both 3 and 5;
// '{number}' if the number doesn't fulfil any of the above conditions.
// Create tests and sames times index.test.js case by case bellow.

function fizzBuzz(number) {
  if (typeof number !== 'number') return 'Not a number';
  if (number === 0) return 'fizzbuzz';
  if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return number.toString();
}
module.exports = fizzBuzz;
