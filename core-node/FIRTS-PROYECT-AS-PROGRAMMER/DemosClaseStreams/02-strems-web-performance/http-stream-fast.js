const fs = require("fs");
const servidor = require("http").createServer();

servidor.on("request", (peticion, respuesta) => {
  const src = fs.createReadStream("./big.file");
  console.log(
    "Memoria en uso en la peticion: ",
    process.memoryUsage().heapUsed
  );
  src.pipe(respuesta);
});

servidor.listen(8008, () => console.log("Servidor escuchando en puerto 8008"));
console.log("Memoria en uso inicial: ", process.memoryUsage().heapUsed);
