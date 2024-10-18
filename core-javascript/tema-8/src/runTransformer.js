const { StringTransformer } = require('./transformer');

const stringExample = new StringTransformer('Hello World');

console.log(stringExample.randomOrder()); // Devuelve caracteres en orden aleatorio
console.log(stringExample.reverseOrder()); // Devuelve 'dlroW olleH'
console.log(stringExample.upperCase()); // Devuelve 'HELLO WORLD'
