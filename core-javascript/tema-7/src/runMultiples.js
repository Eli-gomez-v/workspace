const readline = require('readline');
const generateMultiples = require('./generateMultiples');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });

rl.question('Introduce el tamaño del array: ', (sizeInput) => {
    const size = parseInt(sizeInput, 10);

    rl.question('Introduce el número para obtener los múltiplos:', (numInput) => {
        const num = parseInt (numInput, 10);
    
    const result = generateMultiples(size, num);
    console.log('Los múltiplos de ${num} son:', result);

    rl.close();

    });
});

