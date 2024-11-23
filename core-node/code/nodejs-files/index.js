// Buscar directorio principal con nodejs en cualquier sistema operativo.
const path = require('path');

function getDirectory(){
    return path.resolve(__dirname);
}

const directory = getDirectory();
console.log(directory); // C:/Users/username/Desktop/code/nodejs-files