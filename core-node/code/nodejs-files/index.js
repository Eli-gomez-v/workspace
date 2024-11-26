// Obtener la ruta del directorio actual
const path = require('path');
function getDirectory(){
    return path.resolve(__dirname);
}

const directory = getDirectory();
console.log(directory); // C:/Users/username/Desktop/code/nodejs-files