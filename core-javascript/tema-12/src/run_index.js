// run_index.js - Interacción en la terminal con Sets en Node.js

const readline = require('readline');
const {
  intersectionOfSets,
  unionOfSets,
  differenceOfSets,
  isSubset,
  findMinMax,
  valuesInRange,
} = require('./index');

// Configuración del módulo readline para la interacción en terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function parseInput(input) {
  return new Set(input.split(',').map(Number));
}

function promptUser(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

async function main() {
  console.log('Bienvenido al Juego de Sets en Node.js');
  console.log('Por favor, introduce conjuntos de números separados por comas.');

  const setAInput = await promptUser('Introduce los números para Set A (ejemplo: 1,2,3): ');
  const setBInput = await promptUser('Introduce los números para Set B (ejemplo: 2,3,4): ');
  const setA = parseInput(setAInput);
  const setB = parseInput(setBInput);

  console.log('\nElige una operación para realizar:');
  console.log('1 - Intersección');
  console.log('2 - Unión');
  console.log('3 - Diferencia (A - B)');
  console.log('4 - Verificar si A es subconjunto de B');
  console.log('5 - Encontrar Mínimo y Máximo en Set A');
  console.log('6 - Valores en rango en Set A\n');

  const option = await promptUser('Escribe el número de la operación que deseas realizar: ');

  switch (option) {
    case '1': {
      const intersection = [...intersectionOfSets(setA, setB)];
      console.log(`Intersección de A y B: ${intersection.join(', ')}`);
      break;
    }
    case '2': {
      const union = [...unionOfSets(setA, setB)];
      console.log(`Unión de A y B: ${union.join(', ')}`);
      break;
    }
    case '3': {
      const difference = [...differenceOfSets(setA, setB)];
      console.log(`Diferencia (A - B): ${difference.join(', ')}`);
      break;
    }
    case '4': {
      const subset = isSubset(setA, setB);
      console.log(`¿Es A un subconjunto de B?: ${subset ? 'Sí' : 'No'}`);
      break;
    }
    case '5': {
      const { min, max } = findMinMax(setA);
      console.log(`Mínimo en A: ${min}, Máximo en A: ${max}`);
      break;
    }
    case '6': {
      const minRange = await promptUser('Introduce el valor mínimo del rango: ');
      const maxRange = await promptUser('Introduce el valor máximo del rango: ');
      const inRange = [...valuesInRange(setA, Number(minRange), Number(maxRange))];
      console.log(`Valores en Set A entre [${minRange}, ${maxRange}]: ${inRange.join(', ')}`);
      break;
    }
    default:
      console.log('Opción no válida, por favor ejecuta el programa de nuevo y elige una opción válida.');
      break;
  }

  rl.close();
}

main();
