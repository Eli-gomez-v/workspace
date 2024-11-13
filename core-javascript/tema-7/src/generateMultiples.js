/**
 * Genera un array con los múltiplos de un número dado.
 * @param {number} size - Tamaño del array a generar.
 * @param {number} num - El número del cual se genran los múltiplos. 
 * @returns {number[]} - Un array de múltiplos del número dado.
 */ 
function generateMultiples(size, num) {
  if (size <= 0 || isNaN(size) || isNaN(num)) {
    return [];
  }

  return Array.from({ length: size }).map((_, i) => (i + 1) * num);
}

module.exports = generateMultiples;

