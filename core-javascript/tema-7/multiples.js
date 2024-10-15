// multiples.js
function generateMultiples(size, num) {
  const multiples = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= size; i++) {
    multiples.push(i * num);
    // Push multiples of num to the array
  }
  return multiples;
}
// Export the function for testing and importing
module.exports = generateMultiples;
