/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable no-plusplus */
// multiples.js
function generateMultiples(size, num) {
  const multiples = [];
  for (let i = 1; i <= size; i++) {

    multiples.push(i * num);
    
  }
  return multiples;
}
// Export the function for testing and importing
module.exports = generateMultiples;
