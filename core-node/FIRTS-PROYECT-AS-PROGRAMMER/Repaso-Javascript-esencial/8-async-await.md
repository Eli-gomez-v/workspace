# Async/Await

Primera vamos a ver qué son `async` y `await` en JavaScript y te proporcionaré algunos ejemplos sencillos para ilustrar su uso.

`async` y `await` son características de JavaScript que se utilizan para trabajar con código asíncrono de una manera más limpia y legible. JavaScript es un lenguaje de programación que a menudo se utiliza en entornos web, donde las operaciones como la carga de datos desde una API o la lectura de un archivo pueden llevar tiempo. En lugar de bloquear la ejecución del programa mientras se espera que se complete una tarea, puedes utilizar `async` y `await` para escribir código que parece sincrónico, pero que sigue siendo asincrónico en su funcionamiento subyacente.

**`async`**: Se utiliza para declarar una función como asíncrona. Esto significa que la función contendrá código asincrónico que puede esperar mediante el uso de `await`. Las funciones marcadas como `async` devuelven una Promesa que se resuelve con el valor retornado de la función.

**`await`**: Se utiliza dentro de una función `async` para esperar a que se complete una operación asincrónica antes de continuar con la ejecución del código. `await` solo se puede utilizar dentro de funciones `async`.

Aquí tienes un ejemplo sencillo:

```javascript
// Ejemplo 1: Función asíncrona con await
async function obtenerDatos() {
  // Simulando una operación asincrónica (p. ej., una solicitud a una API)
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  return data;
}

obtenerDatos()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

En el ejemplo anterior, `obtenerDatos` es una función asíncrona que utiliza `await` para esperar a que se complete la solicitud a la API antes de continuar. Luego, puedes usar `.then()` y `.catch()` para manejar la promesa resultante.

Aquí hay otro ejemplo que muestra cómo usar `async` y `await` en un bucle:

```javascript
// Ejemplo 2: Usando async/await en un bucle
async function imprimirNumeros() {
  for (let i = 1; i <= 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simular una espera de 1 segundo
    console.log(i);
  }
}

imprimirNumeros();
```

En este caso, `imprimirNumeros` es una función asíncrona que imprime números del 1 al 5 con una pausa de 1 segundo entre cada número.

Estos ejemplos muestran cómo `async` y `await` facilitan la escritura de código asincrónico de manera más legible y estructurada en JavaScript.
