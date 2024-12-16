// Crear función de promesa básica
/* Crear una función que devuelva una promesa que resuelva
 un mensaje de éxito o un mensaje de error. */
function promiseFunction() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('¡Éxito!');
    } else {
      reject(new Error('¡Error!'));
    }
  });
}

promiseFunction().then(console.log).catch(console.error);
