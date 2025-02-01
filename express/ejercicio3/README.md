# Ejercicios class3

## Ejercicio 1: Métodos de respuesta

[https://expressjs.com/en/4x/api.html#res](https://expressjs.com/en/4x/api.html#res)

## Revisar la documentación de los métodos del objeto response, en concreto de: download, json, redirect,render y sendStatus. ¿Qué devuelve cada uno?

* * `res.download()`: Inicia la descarga de un archivo. Envía un archivo para que el cliente lo descargue. Puedes especificar el nombre del archivo, cabeceras y un callback para manejar errores.

* * `res.json()`: Envía una respuesta JSON. Express.js se encarga de convertir el objeto que le pases a formato JSON y de establecer la cabecera Content-Type a application/json.

* * `res.redirect()`: Redirige la solicitud a una URL específica. Redireccionar al cliente a otra URL. Puedes especificar un código de estado (301, 302, etc.) y la URL de destino.

* * `res.render()`: Renderiza una vista y la envía como respuesta. Renderizar una plantilla de vista (como las que he usado  con Mustache) y envía el HTML resultante al cliente.

* * `res.sendStatus()`: Envía una respuesta con el código de estado HTTP especificado. Envía una respuesta con un código de estado y su representación en texto. Por ejemplo, `res.sendStatus(200)` envía "OK" con el código de estado 200.

* >Nota:Se recomienda revisar la documentación oficial de Express para obtener una comprensión detallada de cada método.

## Ejercicio 2. Revisar las propiedades del objeto request

[https://expressjs.com/en/4x/api.html#req](https://expressjs.com/en/4x/api.html#req)
¿Qué devuelven las propiedades hostname, ip, params y route en nuestro ejemplo de /book/:id?

## Análisis de propiedades de solicitud: Revisar las propiedades del objeto req (request) y determinar qué devuelven las propiedades hostname, ip, params y route en el ejemplo de la ruta /book/:id

* * Las propiedades del objeto req en el contexto del ejercicio: /book/:id:

* * `req.hostname`: Devuelve el nombre de host de la solicitud. Si la URL es <http://localhost:3000/book/123>, `req.hostname` devuelve "localhost".

* * `req.ip`: Devuelve la dirección IP del cliente que realiza la solicitud.

* -`req.params`: Devuelve un objeto con los parámetros de la ruta. Como en el ejercicio, `req.params.id` devuelve "123".

* -`req.route`: Devuelve un objeto con información sobre la ruta que coincide con la solicitud, como el path, los métodos HTTP permitidos, etc.

## Profundizando en el código

* * En el archivo `app.js`, hay  varios ejemplos de rutas y middlewares que son relevantes para los ejercicios que estoy realizando:

**Rutas con parámetros (/book/:id)**: Muestran cómo acceder a los parámetros de la ruta a través de `req.params`.

**Middlewares**: Muestran cómo usar middlewares para realizar acciones antes de que se ejecute el manejador de la ruta.

**Métodos de respuesta**: Usar `res.send()` para enviar respuestas de texto. He experimentado con otros métodos como `res.json()` o `res.sendStatus()`.

## Ejercicios realizados, tanto en la terminal con bash como en el navegador con las herramientas de desarrollador (F12), para profundizar en mi comprensión de Express.js y el enrutamiento

## Ejercicios en Bash

1. Diferentes métodos HTTP

* -Objetivo: Conseguir comprender y saber ejecutar  los diferentes métodos HTTP (GET, POST, PUT, DELETE) y cómo Express.js los maneja.
Pasos:
**Abrir mi terminal y navegar hasta la carpeta del proyecto**.

* -Utiliza el comando curl para enviar solicitudes a tu servidor con diferentes métodos HTTP. Por ejemplo:

```bash
curl http://localhost:3000/book (GET)

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /book</pre>
</body>
</html>

curl -X POST http://localhost:3000/book (POST)

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot POST /book</pre>
</body>
</html>

curl -X PUT http://localhost:3000/book/123 (PUT)

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot PUT /book/123</pre>
</body>
</html>


curl -X DELETE http://localhost:3000/book/123 (DELETE) ##Por prudencia no lo he ejecutado pero abajo se ven las respuestas obtenidas.

> ejercicio3@1.0.0 start-dev
> nodemon app.js

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node app.js`
Example server listening on http://localhost:3000
Time: 1736754948387
Time: 1736754995503
Time: 1736755059919
Time: 1736755096268
Time: 1736755096306
Time: 1736755101192
Request Type: GET
Request URL: /user/Eli
Request Type composed: GET
Time: 1736755106475
Time: 1736755142334
BOOK ID: 123
```

* * Observa las respuestas del servidor en la terminal. Verifica que las rutas y los manejadores en tu archivo app.js estén configurados correctamente para cada método.

## 2. Probando  rutas con parámetros

* Objetivo: Aprender a definir y usar rutas con parámetros en Express.js.

* * Pasos:

Añadir una nueva ruta con parámetros a mi archivo app.js. Por ejemplo:

```JavaScript
app.get('/user/:userId/book/:bookId', (req, res) => {
  const userId = req.params.userId;
  const bookId = req.params.bookId;
  res.send(`Usuario: ${userId}, Libro: ${bookId}`);
});
```

Reinicia el servidor.
En el terminal, enviar una solicitud a la nueva ruta con diferentes valores para los parámetros.
Por ejemplo:

```bash
curl http://localhost:3000/user/123/book/456

Example server listening on http://localhost:3000
Time: 1736755579415
Time: 1736755583921
Request Type: GET
Request URL: /user/Eli
Request Type composed: GET
Time: 1736755591555
BOOK ID: 456
```

>Nota: Observar la respuesta del servidor y verificar que los parámetros se estén capturando y utilizando correctamente.

## Ejercicios con las herramientas de desarrollador (F12)

* 1. Inspecciona las cabeceras de las respuestas

* Objetivo: Entender las cabeceras HTTP que se envían en las respuestas del servidor.
  * Pasos:
    * Abrir el  navegador y navegar a una de las rutas de la aplicación.
    * Abrir las herramientas de desarrollador (F12).
    * En la pestaña "Network" (Red).
    * Recarga la página o envía una nueva solicitud.
    * Hacer clic en la solicitud enviada en la lista de solicitudes.
    ![Lectura de cabeceras en F12](/express/ejercicio3/public/images/lectura-F12.png)

**Ver  las cabeceras de la respuesta en la sección "Headers" (Cabeceras). Especial atención a la cabecera `Content-Type`, que indica el tipo de contenido de la respuesta (text/plain, application/json, etc.)**.

1. Analizando el objeto req

* Objetivo: Profundizar en las propiedades del objeto req (request).
  * Pasos:
    * En el archivo app.js, añadir un middleware que imprima en la consola el objeto req:
    * Reiniciar el servidor.
    * Abrir el navegador, navegar a una de las rutas de la aplicación y abrir las herramientas de desarrollador.
    * En la pestaña "Console" (Consola).

```JavaScript
app.use((req, res, next) => {
  console.log(req);
  next();
});
```

![Lectura de respuesta req][imageLecturaCabecera]

[imageLecturaCabecera]: /path/to/imageLecturaCabecera.png

**Ver  el objeto req que se ha impreso en la consola. Analiza sus diferentes propiedades, como method, url, headers, params, etc**.

## Analizando el código del archivo app.js paso a paso, explicando cada función y cómo trabajan en conjunto

### Estructura básica

```JavaScript
// Se carga el módulo de Express
const express = require("express");

// Creo la aplicación Express
const app = express();

// Declaro el puerto de escucha
const port = 3000;

// ... (Rutas y middlewares) ...

// Creo el servidor en el puerto ${port}
app.listen(port, () => {
  // Se escribe la URL para el acceso al servidor
  console.log(`Example server listening on http://localhost:${port}`);
});
```

**require("express")**: Carga el módulo Express.js, que proporciona las funciones para crear tu aplicación web.
**app = express()**: Crea una instancia de la aplicación Express.js. Esta instancia (app) se utiliza para definir rutas, middlewares y otras configuraciones.
**port = 3000**: Define el puerto en el que se ejecutará el servidor (puerto 3000 en este caso).
**app.listen(port, ...)**: Inicia el servidor en el puerto especificado. La función callback se ejecuta cuando el servidor está listo y muestra un mensaje en la consola.
**Rutas y middlewares**

* El código define varias rutas y middlewares:
    **app.get("/", ...)**: Define una ruta para las peticiones GET a la raíz ("/"). Envía una respuesta con el texto "Hello World!!".

**app.all("/book", ...)**: Define un middleware que se ejecuta para cualquier `método HTTP (GET, POST, PUT, DELETE)` en la ruta "/book". Simplemente imprime un mensaje en la consola y pasa el control al siguiente middleware o manejador de ruta con `next()`.

**app.get("/book", ...)** , **app.post("/book", ...)** , etc.: Definen rutas para diferentes métodos HTTP en la ruta "/book". Cada una envía una respuesta con un mensaje indicando el método utilizado.

**app.get("/ab?cd", ...)** , **app.get("/ab+cd", ...)** , **app.get("/ef*gd", ...)**: Muestran el uso de patrones de texto en las rutas para definir coincidencias más flexibles.
**app.get(/.*fly$/, ...)**: Muestra el uso de expresiones regulares en las rutas.

**app.get("/example/handlers", [cb0, cb1], ...)**: Muestra el uso de una cadena de middlewares.

**Las funciones cb0 y cb1** se ejecutan antes del manejador final de la ruta.
**app.route("/example")...**: Muestra el uso del método route() para encadenar diferentes métodos HTTP para la misma ruta.

**app.get(/a/, ...)**: Otro ejemplo de uso de expresiones regulares en las rutas.

>NOTA: En conjunto el código define una aplicación web simple con varias rutas que responden a diferentes métodos HTTP y patrones de URL. Los middlewares se utilizan para realizar acciones comunes o para añadir lógica adicional a las rutas.

### Puntos clave

Rutas: Definen cómo responde la aplicación a las diferentes solicitudes del cliente.
Middlewares: Funciones que se ejecutan en el ciclo de vida de una petición. Se pueden usar para realizar tareas como autenticación, registro, validación, etc.
Métodos HTTP: GET, POST, PUT, DELETE, etc. Cada método tiene un propósito diferente.

## Patrones de texto y expresiones regulares: Permiten definir rutas más flexibles

### Patrones de texto

## Los patrones de texto se utilizan en

**Express.js** para definir rutas que coincidan con diferentes patrones de URL.

* * En El código de **app.js** se encuentran los siguientes ejemplos:

**/ab?cd**: El signo de interrogación (?) significa que el carácter "b" es opcional.
    *Esta ruta coincide con "/abcd" y "/acd".
**/ab+cd**: El signo más (+) significa que **el carácter "b" debe aparecer una o más veces**.
    * Esta ruta coincidirá con "/abcd", "/abbcd", "/abbbcd", etc.
**/ef*gd**: El asterisco (*) significa que el carácter "f" puede aparecer cero o más veces. Esta ruta coincidirá con "/efgd", "/efcgd", "/efRABDOMgd", "/ef123gd", etc.

### Expresiones regulares

Las expresiones regulares son **una forma más potente y flexible de definir patrones de URL**.

**app.get(/.*fly$/, ...)**: Esta expresión regular coincide con cualquier ruta que termine con "fly" (como "/butterfly" o "/dragonfly").

**Funciones cb0 y cb1**:

* -Son middlewares que se ejecutan antes del manejador final de la ruta /example/handlers.

```JavaScript
const cb0 = (req, res, next) => {
  console.log("CB0");
  next();
};

const cb1 = (req, res, next) => {
  console.log("CB1");
  next();
};
```

>NOTA: Cada función simplemente imprime un mensaje en la consola ("CB0" o "CB1").
La llamada a next() pasa el control al siguiente middleware o manejador de ruta en la cadena.
En este caso, se utilizan para mostrar cómo se pueden encadenar middlewares para realizar diferentes acciones antes de que se procese la solicitud final.

## Manipulación de conjuntos en JavaScript, Express.js y PostgreSQL

* * Funciones para manipular conjuntos (Sets) en JavaScript.

1. intersectionOfSets(setA, setB)

Descripción: Devuelve un nuevo conjunto con los elementos comunes a setA y setB.
Adaptación a Express.js: Puedes usar esta función para, por ejemplo, encontrar usuarios que pertenezcan a dos grupos diferentes en tu aplicación. Recibirías los IDs de los usuarios de cada grupo como conjuntos y la función te devolvería los IDs de los usuarios que están en ambos grupos.
Adaptación a PostgreSQL: En PostgreSQL, puedes lograr la intersección de conjuntos usando el operador INTERSECT en una consulta SQL:

```SQL

SELECT id FROM usuarios WHERE grupo = 'grupoA'
INTERSECT
SELECT id FROM usuarios WHERE grupo = 'grupoB';
```

1. unionOfSets(setA, setB)

Descripción: Devuelve un nuevo conjunto con todos los elementos de setA y setB, sin duplicados.
Adaptación a Express.js: Puedes usar esta función para combinar resultados de diferentes consultas a la base de datos o para agregar elementos a un conjunto existente sin duplicados.
Adaptación a PostgreSQL: En PostgreSQL, puedes usar el operador UNION en una consulta SQL para obtener la unión de dos conjuntos:

```SQL

SELECT id FROM usuarios WHERE grupo = 'grupoA'
UNION
SELECT id FROM usuarios WHERE grupo = 'grupoB';
```

* 1. differenceOfSets(setA, setB)

Descripción: Devuelve un nuevo conjunto con los elementos que están en setA pero no en setB.
Adaptación a Express.js: Puedes usar esta función para, por ejemplo, encontrar usuarios que están en un grupo pero no en otro.
Adaptación a PostgreSQL: En PostgreSQL, puedes usar el operador EXCEPT en una consulta SQL para obtener la diferencia de dos conjuntos:

```SQL

SELECT id FROM usuarios WHERE grupo = 'grupoA'
EXCEPT
SELECT id FROM usuarios WHERE grupo = 'grupoB';
```

* 1. isSubset(setA, setB)

Descripción: Verifica si setA es un subconjunto de setB (si todos los elementos de setA están en setB).
Adaptación a Express.js: Puedes usar esta función para verificar si un usuario tiene todos los permisos necesarios para realizar una acción, o si un conjunto de elementos cumple con ciertos requisitos.
Adaptación a PostgreSQL: Puedes usar una subconsulta con EXISTS para verificar si un conjunto es subconjunto de otro:

```SQL

SELECT EXISTS (
  SELECT 1
  FROM unnest(ARRAY[1,2,3]) AS a
  WHERE NOT EXISTS (
    SELECT 1
    FROM unnest(ARRAY[1,2,3,4,5]) AS b
    WHERE a = b
  )
);
```

* 5.findMinMax(set)

Descripción: Encuentra el valor mínimo y máximo en un conjunto.
Adaptación a Express.js: Puedes usar esta función para analizar datos numéricos recibidos del cliente o de la base de datos.
Adaptación a PostgreSQL: PostgreSQL tiene funciones min() y max() que puedes usar directamente en consultas SQL:

```SQL

SELECT min(valor), max(valor) FROM mi_tabla;
```

* 6.valuesInRange(set, min, max)

Descripción: Devuelve un nuevo conjunto con los valores del conjunto original que están dentro del rango especificado (min - max).
Adaptación a Express.js: Puedes usar esta función para filtrar datos numéricos.
Adaptación a PostgreSQL: Puedes usar la cláusula BETWEEN en una consulta SQL para obtener valores dentro de un rango:

```SQL

SELECT valor FROM mi_tabla WHERE valor BETWEEN min AND max;
```

## Crear un archivo query.sh

```sh
#!/bin/bash

# Configuración de la base de datos
DB_NAME="express-db-knex"
DB_USER="postgres"
DB_HOST="127.0.0.1"
DB_PORT="5432"

# Este es el orden de las migraciones:
npx sequelize-cli db:seed --seed 20250121104537-users.js
npx sequelize-cli db:seed --seed 20250121103749-teachers.js
npx sequelize-cli db:seed --seed 20250121103751-students.js
npx sequelize-cli db:seed --seed 20250121103752-classes.js
npx sequelize-cli db:seed --seed 20250121103753-student-classes.js

# Consulta para verificar las tablas
echo "Verificando las tablas en la base de datos:"
psql -U $DB_USER -h $DB_HOST -p $DB_PORT -d $DB_NAME -c "\dt"

# Consulta para obtener los alumnos de cada profesor
echo "Obteniendo los alumnos de cada profesor:"
psql -U $DB_USER -h $DB_HOST -p $DB_PORT -d $DB_NAME -c "
SELECT t.name AS teacher_name, s.name AS student_name, s.dni
FROM \"Teachers\" t
JOIN \"Students\" s ON t.id = s.teacher_id
ORDER BY t.name, s.name;
"

# Consulta para obtener el total de alumnos
echo "Obteniendo el total de alumnos:"
psql -U $DB_USER -h $DB_HOST -p $DB_PORT -d $DB_NAME -c "
SELECT COUNT(*) AS total_students
FROM \"Students\";
"
chmod +x query.sh # Hace el archivo ejecutable.

./query.sh # Ejecutar el archivo y introducir el password del archivo config en para cada consulta.

# Ejecutar archivo de consultas curl:
chmod +x api-requests.sh

./api-requests.sh
```
### Recomendaciones y mejoras

* Ejemplos de implementación en Express.js y PostgreSQL en los siguientes archivos:

  * express-example.js
  * postgresql-example.sql

## Bibliografía

* Documentación de Express.js: <https://expressjs.com/>
* Documentación de PostgreSQL: <https://www.postgresql.org/docs/>

## En general, Node.js y Express.js, por defecto, ejecutan el código de forma secuencial y no en paralelo. Esto significa que cada solicitud HTTP se maneja en un solo hilo, y las operaciones se ejecutan una tras otra

>NOTA:Sin embargo, Node.js ofrece mecanismos para realizar operaciones asíncronas, lo que permite que el servidor no se bloquee mientras espera que se completen tareas que requieren mucho tiempo, como la lectura de archivos o las consultas a la base de datos.

### En el archivo app.js

**Las rutas y middlewares se definen de forma secuencial**.
No hay código que utilice explícitamente hilos o procesos para ejecutar tareas en paralelo.

>NOTA: Es probable que algunas operaciones, como las llamadas a res.send() o console.log(), se ejecuten de forma asíncrona en segundo plano, pero esto no significa que el código principal se esté ejecutando en paralelo.

### Para implementar paralelismo en Express.js, podrías usar

**Módulos de clúster**: El módulo cluster de Node.js permite crear procesos hijos que comparten el mismo puerto de escucha. Esto permite que la aplicación maneje múltiples solicitudes simultáneamente.

**Worker threads**: Los worker threads permiten ejecutar código JavaScript en paralelo en diferentes hilos. Esto puede ser útil para tareas que requieren mucha CPU.

**Librerías de terceros**: Existen librerías como async.js o bluebird.js que facilitan la gestión de operaciones asíncronas y el paralelismo.

### Ejemplo de uso del módulo cluster

```JavaScript

const cluster = require('cluster');
const os = require('os');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  require('./app'); // Reemplaza con la ruta a tu archivo app.js

  console.log(`Worker ${process.pid} started`);
}
```

## Recomendaciones

* * Analizar las necesidades de la aplicación: No siempre es necesario implementar paralelismo.
* * Si la aplicación no tiene un alto volumen de tráfico o no realiza tareas que requieren mucha CPU, el paralelismo podría no ser necesario.
* * Considera la complejidad: Implementar paralelismo puede aumentar la complejidad de tu aplicación. Asegúrate de entender bien las implicaciones antes de implementarlo.
* * Monitorizar el rendimiento: Después de implementar paralelismo, monitorea el rendimiento de tu aplicación para asegurarte de que está funcionando correctamente y de que está obteniendo los beneficios esperados.
Espero que esta explicación te sea útil.

### Cuándo es recomendable implementar un módulo cluster en express, por favor, sugiere o explícame con ejemplos concretos o qué preguntas debo realizar al profesor a fin de que expecifique supuestos concretos a fin de enterder mejor los archivos en express. Gracias

>NOTA: Es recomendable implementar un módulo cluster en Express.js cuando tu aplicación necesita manejar un alto volumen de tráfico o realizar tareas intensivas en CPU.

### Ejemplos concretos

* **API con muchas solicitudes concurrentes**: Si tu API recibe miles de solicitudes por segundo, un solo proceso de Node.js podría no ser suficiente para manejarlas todas de manera eficiente. Un módulo cluster te permitiría distribuir las solicitudes entre varios procesos, mejorando el rendimiento y la escalabilidad.
* **Procesamiento de imágenes o videos**: Si tu aplicación realiza tareas de procesamiento de imágenes o videos, que suelen ser intensivas en CPU, un módulo cluster podría acelerar el procesamiento al distribuir las tareas entre varios núcleos del procesador.
* **Aplicaciones de tiempo real**: Si tu aplicación necesita manejar conexiones de WebSockets o realizar otras tareas en tiempo real, un módulo cluster podría mejorar la capacidad de respuesta al distribuir las conexiones entre varios procesos.

## Preguntas para el profesor

¿Podrías dar un ejemplo de una aplicación web que se beneficie del uso de un módulo cluster?
¿Cómo puedo determinar si mi aplicación necesita un módulo cluster? ¿Hay alguna métrica o herramienta que pueda usar?
¿Cuáles son las ventajas y desventajas de usar un módulo cluster en Express.js?
¿Cómo puedo implementar un módulo cluster en mi aplicación de forma correcta y segura?
¿Qué otras alternativas existen para mejorar el rendimiento y la escalabilidad de una aplicación Express.js, además de los módulos cluster?

## En resumen

**Los patrones de texto y las expresiones regulares nos permiten definir rutas más flexibles que coincidan con diferentes patrones de URL**.

**Las funciones cb0 y cb1 son middlewares que se utilizan para demostrar cómo se pueden encadenar middlewares para realizar acciones antes de que se procese la solicitud final**.
