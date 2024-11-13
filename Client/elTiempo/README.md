# elTiempo

Este proyecto, `elTiempo`, es una aplicación web que muestra información meteorológica. La aplicación consta de un archivo HTML principal y varios archivos JavaScript que manejan la lógica y la interacción con la API del clima de la web OpenWeather.

## Archivos

### elTiempo.html

Este es el archivo principal de la aplicación. Contiene la estructura básica de la página web, incluyendo:

- Un campo de entrada para que el usuario ingrese el nombre de una ciudad.
- Un botón para enviar la solicitud de información meteorológica.
- Un área para mostrar los resultados del clima.

### Archivos JavaScript

### miScriptMeteorologico.js

Este archivo se encarga de actualizar la interfaz de usuario. Sus funciones incluyen:

- Mostrar mensajes de error si la solicitud a la API falla.
- Actualizar la vista con la información meteorológica recibida.

Este archivo contiene la lógica principal de la aplicación. Sus funciones incluyen:

- Capturar el valor ingresado por el usuario.
- Enviar una solicitud a la API del clima.
- Procesar y mostrar los datos recibidos de la API.

#### OpenWeather demo.postman_collection.json

Este archivo maneja las interacciones con la API del clima. Sus funciones incluyen:

- Configurar y enviar solicitudes HTTP a la API.
- Manejar las respuestas de la API y devolver los datos relevantes a `miScriptMeteorologico.js`.

## Uso

1. Ingresa el nombre de una ciudad en el campo de entrada.
2. Haz clic en el botón de enviar.
3. La información meteorológica de la ciudad ingresada se mostrará en la página.
