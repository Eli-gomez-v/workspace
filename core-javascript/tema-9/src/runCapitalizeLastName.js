const readline = require('readline');
const capitalizeLastName = require('./capitalizeLastName');

// Configurar readline para recibir el input del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Solicitar al usuario que introduzca el nombre
rl.question('Introduce un nombre y apellido: ', (input) => {
  try {
    const result = capitalizeLastName(input);
    console.log(`Nombre formateado: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    rl.close();
  }
});
