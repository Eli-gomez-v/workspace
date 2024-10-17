function generateMultiples(size, num) {
  return Array.from({ length: size }).map((_, i) => (i + 1) * num);
}

module.exports = generateMultiples;
