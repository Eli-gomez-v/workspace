# Callbacks

Los callbacks en JavaScript son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se complete una operación asincrónica. Estas funciones son fundamentales para manejar eventos, realizar solicitudes AJAX, trabajar con temporizadores y realizar otras tareas asincrónicas en JavaScript. Te explicaré cómo funcionan los callbacks con ejemplos simples.

**Ejemplo 1: Función de retardo con Callback**

Imagina que quieres crear una función que imprima un mensaje después de un cierto período de tiempo. Aquí hay un ejemplo usando un callback:

```javascript
function imprimirMensajeDespuesDeRetardo(mensaje, retardo, callback) {
  setTimeout(function() {
    console.log(mensaje);
    callback(); // Llama al callback después del retardo
  }, retardo);
}

function mostrarMensaje() {
  console.log("El mensaje se ha mostrado después del retardo.");
}

imprimirMensajeDespuesDeRetardo("Mensaje de prueba", 2000, mostrarMensaje);
```

En este ejemplo, `imprimirMensajeDespuesDeRetardo` toma un mensaje, un retardo (en milisegundos) y una función callback. Después de esperar el tiempo especificado, la función callback `mostrarMensaje` se ejecuta.

**Ejemplo 2: Uso de Callbacks con una Solicitud AJAX**

Supongamos que deseas realizar una solicitud AJAX y realizar una acción cuando se complete. Aquí hay un ejemplo:

```javascript
function realizarSolicitudAJAX(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var datos = JSON.parse(xhr.responseText);
      callback(datos);
    }
  };
  xhr.send();
}

function manejarDatos(datos) {
  console.log("Datos recibidos:", datos);
}

realizarSolicitudAJAX("https://ejemplo.com/api/datos", manejarDatos);
```

En este caso, `realizarSolicitudAJAX` toma una URL y una función callback. Cuando la solicitud AJAX se completa con éxito, se llama a la función callback `manejarDatos` con los datos recibidos.

Los callbacks son esenciales en JavaScript para manejar tareas asincrónicas y eventos. Permiten que tu código sea más modular y reactivo, ya que puedes definir qué sucede después de que se complete una operación asincrónica.