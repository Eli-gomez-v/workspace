# Promesas

En JavaScript, una promesa es un objeto que representa un valor que puede no estar disponible de inmediato, pero que estará disponible en el futuro. Las promesas se utilizan para manejar operaciones asincrónicas, como la obtención de datos de un servidor, la lectura de archivos o la ejecución de código que puede llevar tiempo.

Una promesa puede tener uno de los siguientes tres estados:

1. **Pending**: La promesa está en proceso. Esto significa que la operación asincrónica aún no se ha completado, pero se encuentra en curso.

2. **Fulfilled**: La promesa se ha resuelto correctamente. Esto significa que la operación asincrónica se completó con éxito, y la promesa contiene el valor resultante.

3. **Rejected**: La promesa ha sido rechazada debido a un error. Esto significa que la operación asincrónica falló, y la promesa contiene información sobre el error.

Para trabajar con promesas en JavaScript, se utilizan dos métodos importantes: `then` y `catch`.

- `then`: Se utiliza para manejar el caso en el que la promesa se resuelve con éxito.
- `catch`: Se utiliza para manejar el caso en el que la promesa es rechazada debido a un error.

Aquí tienes un ejemplo simple de una promesa que simula una operación asincrónica para obtener datos:

```javascript
const promesa = new Promise((resolve, reject) => {
  // Simulación de una operación asincrónica que toma tiempo
  setTimeout(() => {
    const exito = true; // Cambia a false para simular un error
    if (exito) {
      resolve("Los datos se obtuvieron con éxito.");
    } else {
      reject("Hubo un error al obtener los datos.");
    }
  }, 2000); // Simulación de una demora de 2 segundos
});

// Manejo de la promesa con then y catch
promesa
  .then((resultado) => {
    console.log(resultado); // Se ejecuta si la promesa se resuelve
  })
  .catch((error) => {
    console.error(error); // Se ejecuta si la promesa es rechazada
  });
```

Este ejemplo crea una promesa que se resuelve después de una demora simulada. Puedes cambiar la variable `exito` a `false` para simular un error y ver cómo se maneja el rechazo de la promesa.

Las promesas son una forma poderosa de trabajar con operaciones asincrónicas en JavaScript, ya que te permiten escribir código más limpio y legible en lugar de anidar callbacks.