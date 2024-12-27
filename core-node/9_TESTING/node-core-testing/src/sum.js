// This file uses commonjs module syntax. This is the default in Node.js.

/**
 * This is a sum function that adds two numbers.
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} - The sum of `a` and `b`.
 * @example
 * sum(1, 2); // 3
 */
function sum(a, b) {
  return a + b;
}

module.exports = sum;

/**
 * This file uses ecma module syntax. This is the default in browsers.
 * 
 * If we want to use this file in Node.js, we need to add the following
 * line to package.json:
 * 
 * "type": "module"
 * 
 * export default function sum(a, b) {
 * return a + b;
 * }
 * */
