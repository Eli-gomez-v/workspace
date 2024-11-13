# Contar los dígitos en un número

En una página web simple que permite al usuario ingresar unos números y un dígito de los números que ha ingresado, y luego cuenta cuántas veces aparece ese dígito en el número. La lógica está implementada en JavaScript, y el proyecto incluye un archivo HTML con estilo y botones interactivos.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos principales:

- `index.html`: Archivo HTML que contiene la interfaz de usuario, incluyendo los campos de textos y botones donde interactua el usuario.
- `evaluacion_5.5.js`: Archivo JavaScript que contiene la función que cuenta cuántas veces aparece un dígito en un número dado.

## Estilo del HTML

El archivo `index.html` contiene un estilo simple en línea, aplicado dentro del bloque `<style>` en la cabecera del documento. El estilo se centra en la presentación de los campos de texto y botones de manera agradable y con una experiencia de usuario limpia.

### Elementos Estilizados

- **Body**: El fondo es de color gris claro y el contenido está centrado con un espaciado de `50px` alrededor del cuerpo del documento.
- **Botón y Campos de Texto**:
  - Los campos de texto y botones tienen un padding de `10px` para hacerlos más cómodos al interactuar.
  - Los bordes están redondeados con un `border-radius` de `5px` y se han estilizado con un borde ligero (`1px solid #ccc`).
  - El botón tiene un color de fondo verde (`#28a745`) con texto blanco, y cambia a un verde más oscuro (`#218838`) cuando el usuario lo pasa por encima con el cursor (efecto hover).
- **Resultado**: El resultado se muestra debajo del botón en un párrafo con un estilo diferenciado, con un tamaño de letra más grande y en color verde.

### Métodos JavaScript empleados

**toString()** convertir el número y el dígito en cadena de texto; ésto permite comparar sus caracteres de forma sencilla.
**strNumero y strDigito** con Bucle for y comparación estricta.
