// Buscar el directorio actual
// Módulo PATH de Node.js y join.
const path = require('path');

const directorioActual = path.join(__dirname);
console.log(directorioActual);

// Buscar el directorio padre
const directorioPadre = path.join(__dirname, '..');
console.log(directorioPadre);

// Buscar el directorio hijo
const directorioHijo = path.join(__dirname, 'hijo');
console.log(directorioHijo);

// Buscar el directorio hijo de un directorio hijo
const directorioHijoHijo = path.join(__dirname, 'hijo', 'hijo');
console.log(directorioHijoHijo);

// Buscar el directorio padre de e hijo de modo sync
const directorioPadreHijo = path.join(__dirname, '..', 'hijo');
console.log(directorioPadreHijo);

// Buscar el directorio padre de e hijo de modo async
try {
  const directorioPadreHijoAsync = path.join(__dirname, '..', 'hijo');
  console.log(directorioPadreHijoAsync);
} catch (error) {
  console.error(error);
}
