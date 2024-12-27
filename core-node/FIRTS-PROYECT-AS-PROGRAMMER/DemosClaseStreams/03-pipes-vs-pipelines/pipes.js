const fs = require("fs");

let readStream = fs.createReadStream("./miarchivo.txt");
let writeStream = fs.createWriteStream("./miarchivo.txt");

readStream.pipe(writeStream);

readStream.on("end", () => {
  console.log("Lectura terminada");
});

/* readStream.on("error", (error) => {
  console.error(error);
}); */

writeStream.on("finish", () => {
  console.log("Escritura terminada");
});

/* writeStream.on("error", (error) => {
  console.error(error);
}); 
 */
