const fs = require("fs");
const servidor = require("http").createServer();

servidor.on("request", (peticion, respuesta) => {
  const data = fs.readFileSync("./big.file");
  console.log(
    "Memoria en uso en la peticion: ",
    process.memoryUsage().heapUsed
  );
  respuesta.end(data.toString());
});

servidor.listen(8007, () => console.log("Servidor escuchando en puerto 8007"));

console.log("Memoria en uso inicial: ", process.memoryUsage().heapUsed);
