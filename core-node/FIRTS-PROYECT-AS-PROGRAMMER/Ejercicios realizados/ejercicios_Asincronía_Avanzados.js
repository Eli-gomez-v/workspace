/** Bienvendo a los ejercicios de CORE NODE - EVENT LOOP Y ASINCRONICITY */

/**
 *
 * Ejercicios 0
 *
 * Bienvenido al bucle de eventos, Bienvenido a la fiesta asíncronica :D
 *
 * Os propongo 10 ejercicios  practicar mas con nodejs.
 *
 * 1. Leer y mostrar el contenido de un archivo de forma asíncrona.
 * 2. Crear un servidor HTTP asíncrono que responda con "Hola, mundo!".
 * 3. Realizar múltiples solicitudes HTTP de manera asíncrona y mostrar los resultados.
 * 4. Leer y escribir archivos de manera asíncrona.
 * 5. Utilizar el módulo `child_process` para ejecutar un comando en el sistema.
 * 6. Leer y analizar un archivo JSON de manera asíncrona.
 * 7. Crear un servidor TCP asíncrono.
 * 8. Utilizar el módulo `os` para obtener información del sistema.
 * 9. Realizar una solicitud HTTP utilizando el módulo `http`.
 * 10. Utilizar el módulo `crypto` para generar una firma digital asíncrona.
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
```javascript
const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```

2.
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola, mundo!\n');
});

server.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
```


3.
```javascript
const http = require('http');

const urls = ['http://sitio1.com', 'http://sitio2.com', 'http://sitio3.com'];

const obtenerContenido = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    });
  });
};

Promise.all(urls.map(obtenerContenido))
  .then((resultados) => {
    resultados.forEach((contenido, index) => {
      console.log(`Contenido del sitio ${index + 1}: ${contenido}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
```


4.
```javascript
const fs = require('fs');

fs.readFile('entrada.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const resultado = data.toUpperCase();
    fs.writeFile('salida.txt', resultado, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Archivo de salida creado exitosamente.');
      }
    });
  }
});
```


5.
```javascript
const { exec } = require('child_process');

exec('ls -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error estándar: ${stderr}`);
    return;
  }
  console.log(`Salida estándar: ${stdout}`);
});
```


6.
```javascript
const fs = require('fs');

fs.readFile('datos.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const objetoJSON = JSON.parse(data);
    console.log(objetoJSON);
  }
});
```


7.
```javascript
const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Hola, cliente!\n');
  socket.pipe(socket);
});

server.listen(8080, () => {
  console.log('Servidor TCP en ejecución en el puerto 8080');
});
```


8.
```javascript
const os = require('os');

console.log(`Nombre del host: ${os.hostname()}`);
console.log(`Sistema operativo: ${os.platform()}`);
console.log(`Arquitectura: ${os.arch()}`);
console.log(`CPU: ${os.cpus()[0].model}`);
```


9.
```javascript
const http = require('http');

const opciones = {
  hostname: 'www.ejemplo.com',
  port: 80,
  path: '/',
  method: 'GET',
};

const solicitud = http.request(opciones, (respuesta) => {
  let datos = '';

  respuesta.on('data', (chunk) => {
    datos += chunk;
  });

  respuesta.on('end', () => {
    console.log(datos);
  });
});

solicitud.end();
```


10.
```javascript
const crypto = require('crypto');

const clavePrivada = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

const mensaje = 'Mensaje a firmar';

const firma = crypto.sign('sha256', Buffer.from(mensaje), clavePrivada.privateKey);

console.log('Mensaje:', mensaje);
console.log('Firma:', firma.toString('base64'));
```
*/


