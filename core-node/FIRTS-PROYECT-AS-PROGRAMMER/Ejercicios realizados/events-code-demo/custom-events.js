const fs = require("fs");
const filePath = "./files/myFile.txt";
const streamEscritura = fs.createWriteStream(filePath);
const EventEmitter = require("events");

class Emisor extends EventEmitter {}

const miEmisor = new Emisor();

function redactarCorreo() {
  console.log("Redactando el correo...");
  let iteraciones = 5;

  streamEscritura.write(`\n\n--Notificacion de compras--\n\n`);

  for (let i = 0; i < iteraciones; i++) {
    streamEscritura.write(`Comprado producto con ID #${i}\n`);
  }

  streamEscritura.write(`\n======= Total ${iteraciones} =======`);
  streamEscritura.end();
}

function notificarPorCorreo() {
  console.log("Programando la notificacion por correo...");

  setTimeout(() => {
    miEmisor.emit("correoOK");
    console.log("Notificacion enviada");
  }, 1000);
}

function leerNotificacionCorreo() {
  console.log("Leyendo la notificacion por correo...");
  fs.readFile(filePath, (error, documento) => {
    if (error) {
      console.log("Error al leer el correo");
      return;
    }
    console.log("Correo leido correctamente, aquí tienes el contenido:");
    console.log(documento.toString());
  });
}

streamEscritura.on("close", () => {
  console.log("Stream de escritura finalizado");

  notificarPorCorreo();
});

miEmisor.on("correoOK", () => {
  leerNotificacionCorreo();
});

redactarCorreo();
