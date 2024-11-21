function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    let n1 = 0;
    let n2 = 1;
    let sum = 0;
  
    for (let i = 2; i <= n; i++) {
      sum = n1 + n2;
      console.log(`Iteration ${i}: sum = ${sum}, n1 = ${n1}, n2 = ${n2}`);
      n1 = n2;
      n2 = sum;
    }
  
    return n2;
  }
  
  const result = fibonacci(5);
  console.log(result); // Debería imprimir 5