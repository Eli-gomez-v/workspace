// Aplicación Node.js para calcular el número N de la sucesión de Fibonacci.
/*  La sucesión de Fibonacci es una serie de números en la que cada número es la suma de los dos
    anteriores. */
// Para ejecutar este script, escribe en la terminal: node fibonacci.js
function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let sum = 0;

  if (n === 0) return n1;
  if (n === 1) return n2;
  

  for (let i = 2; i <= n; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }
  return n2;
}

const result = fibonacci(5);
console.log(result); // 5
