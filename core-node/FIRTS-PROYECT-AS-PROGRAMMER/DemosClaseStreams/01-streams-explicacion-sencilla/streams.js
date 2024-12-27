/**
 * Comparar los tiempos de la lectura sincrona
 * con la de streams a medida que el archivo crece
 */

const fs = require('fs');
console.time("tiempo de respuesta lectura sincrona");

for(let i=0; i<= 10; i++) {
  fs.readFileSync('archivo.txt', 'utf8');
}
console.timeEnd("tiempo de respuesta lectura sincrona");



console.time("tiempo de respuesta lectura stream");
for(let i=0; i<= 10; i++) {
   
  const streamEscritura = fs.createReadStream("archivo.txt", {
    encoding: "utf-8"
  });

}
console.timeEnd("tiempo de respuesta lectura stream");