/** Bienvendo a los ejercicios de CORE NODE - DEBUGGING */

/**
 *
 * Ejercicio 0
 *
 * Empieza tu aventura como INSPECTOR NODE DEBUGGER...
 * El objetivo es que conozcas y practiques los dos modos principales de depuración,
 *
 * - Iniciar
 * - Adjuntar
 *
 * (si tienes dudas usa el enlace de repaso https://code.visualstudio.com/docs/editor/debugging):
 *
 * *************** ADJUNTAR ***************
 *
 * 0. Abre el terminal
 *
 * 1. Usa los comandos que hemos visto en clase para habilitar el inspector y luego usar el método de vincular:
 *
 * node --inspect ejercicio0_Habilitando_el_inspector_DEBUGGING.js
 *
 * 2. Practica todo lo que hemos visto en clase:
 *
 * - Añadir un depurador a través del método de vinculación a un proceso
 *
 ***************** INICIAR ***************
 *
 * 3. Usando el inspector de vscode en la pestaña run and debug, crea un archivo launch.json nuevo
 * y configura el modo iniciar para que se ejecute el archivo ejercicio0_Habilitando_el_inspector_DEBUGGING.js
 * usando la opción de node.js
 *
 * - Borra la carpeta .vscode y crea un archivo launch.json nuevo si es que existen.
 *
 * 4. Practica todo lo que hemos visto en clase con el modo iniciar
 *
 ***************** PRACTICAR ***************
 *
 * 5. Cambia el código del archivo ejercicio0_Habilitando_el_inspector_DEBUGGING.js por el que aparece
 * en este enlace https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/stack/Stack.js
 * (puedes usar cualquier otro algoritmo que encuentres en este repositorio), y practica todo lo que hemos visto en clase,
 * usando el modo iniciar y comenta el código del algoritmo que hayas elegido explicando los puntos que creas importante para entenderlo.
 *
 * - En este ejercicio no es necesario que uses el modo adjuntar,
 * pero si es necesario que uses el algoritmo en un pequeño programa de prueba,
 * y posteriormente uses el modo iniciar para depurar el programa usando los breakpoints que consideres etc.
 *
 * 6. Explica con tus palabras para que sirve cada botón del panel de depuración(modo iniciar)
 *
 * 7. ¿Que es el archivo launch.json y para que sirve?
 *
 * Para subir nota:
 *
 * Apunta aquí tus dudas y cosas nuevas que hayas descubierto,
 * preguntas u opiniones sobre el ejercicio, ¿como lo mejorarías?,
 * ¿Que te ha gustado? ¿Que no te ha gustado?
 *
 */

let mensajes = 0;

console.log("Hello, Albañil@s!!");

mensajes++;

console.log("Me llamo", process.env.USER);

mensajes++;

console.log("Y la ruta de mi cuenta va a ser", process.env.HOME);

mensajes++;

console.log("Se han escrito ", mensajes, " mensajes en la consola");

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hola! Bienvenid@ A MI NUEVA PAGINA WEB!!!!!!!");
});

const port = 2000;

server.listen(port, () => console.log("Escuchando en el puerto", port));
