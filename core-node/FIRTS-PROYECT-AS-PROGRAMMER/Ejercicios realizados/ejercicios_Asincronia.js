/** Bienvendo a los ejercicios de CORE NODE - EVENT LOOP Y ASINCRONICITY */

/**
 *
 * Ejercicios 0
 *
 * Bienvenido al bucle de eventos, Bienvenido a la fiesta asíncronica :D
 *
 * Os propongo 5 ejercicios sencillos para empezar a practicar con el código asíncrono.
 *
 * 1.Suma Asíncrona de Números: Crea una función que tome dos números como argumentos y
 * devuelva su suma de manera asíncrona utilizando `setTimeout`.
 * El resultado debe ser mostrado en la consola después de 2 segundos.
 *
 * 2. Promesa de Multiplicación: Crea una función que tome dos números y devuelva una
 * promesa que resuelva el producto de esos números. Luego, utiliza la promesa para mostrar
 * el resultado.
 *
 * 3. Iteración Asíncrona: Crea una función que itere a través de un arreglo de números y
 * los muestre en la consola uno por uno con un retraso de 1 segundo entre cada número.
 *
 * 4. Código Síncrono y Asíncrono: Crea una función que demuestre la diferencia entre el
 * código síncrono y asíncrono. Realiza una operación matemática simple de manera síncrona y
 * otra operación asíncrona (por ejemplo, una promesa) y muestra la diferencia en el tiempo
 * de ejecución.
 *
 * 5. Manejo de Errores Asíncronos:Crea una función que intente cargar una imagen de manera
 * asíncrona y maneje los errores si la imagen no se carga correctamente.
 *
 *
 * PSN(Para subir nota):
 * Apunta aquí tus dudas y cosas nuevas que hayas descubierto,
 * preguntas u opiniones sobre el ejercicio, ¿como lo mejorarías?,
 * ¿Que te ha gustado? ¿Que no te ha gustado?
 *
 **/

/*
 * Soluciones:
 
1.

function sumaAsincrona(a, b) {
  setTimeout(() => {
    const resultado = a + b;
    console.log(`La suma es: ${resultado}`);
  }, 2000);
}

sumaAsincrona(5, 7);


2.

function multiplicacionAsincrona(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = a * b;
      resolve(resultado);
    }, 1000);
  });
}

multiplicacionAsincrona(3, 4)
  .then(resultado => {
    console.log(`El producto es: ${resultado}`);
  });


3. 

function iteracionAsincrona(arr) {
  let index = 0;
  function mostrarNumero() {
    if (index < arr.length) {
      console.log(arr[index]);
      index++;
      setTimeout(mostrarNumero, 1000);
    }
  }
  mostrarNumero();
}

const numeros = [1, 2, 3, 4, 5];
iteracionAsincrona(numeros);


4.

function operacionSincrona() {
  const resultado = 10 + 20;
  console.log("Operación síncrona:", resultado);
}

function operacionAsincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = 30 - 15;
      resolve(resultado);
    }, 2000);
  });
}

operacionSincrona();
operacionAsincrona().then(resultado => {
  console.log("Operación asíncrona:", resultado);
});


5.

function cargarImagenAsync(url) {
  return new Promise((resolve, reject) => {
    const imagen = new Image();
    imagen.src = url;

    imagen.onload = () => {
      resolve(imagen);
    };

    imagen.onerror = () => {
      reject(new Error("No se pudo cargar la imagen"));
    };
  });
}

const imageURL = 'url_de_la_imagen.jpg';
cargarImagenAsync(imageURL)
  .then(imagen => {
    document.body.appendChild(imagen);
  })
  .catch(error => {
    console.error(error.message);
  });
  
 */
