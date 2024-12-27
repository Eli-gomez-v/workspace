const fs = require("fs");
const { pipeline } = require("stream");

let readStream = fs.createReadStream("./miarchivo.txt");
let writeStream = fs.createWriteStream("./miarchivo.txt");

pipeline(readStream, writeStream, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("Pipeline Successful");
  }
});

readStream.on("end", () => {
  console.log("Lectura terminada");
});

writeStream.on("finish", () => {
  console.log("Escritura terminada");
});


