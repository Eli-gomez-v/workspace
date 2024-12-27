const fs = require("fs");
const archivo = fs.createWriteStream("miarchivo.txt");

for (let i = 0; i <= 1e5; i++) {
  archivo.write("Streamseverywhere!");
}

archivo.end();
