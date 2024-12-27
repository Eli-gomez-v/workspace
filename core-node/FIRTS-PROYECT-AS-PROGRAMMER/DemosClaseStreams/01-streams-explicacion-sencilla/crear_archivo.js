const fs = require("fs");
const archivo = fs.createWriteStream("archivo.txt");

for (let i = 0; i <= 1e1; i++) {
  archivo.write(
    "Esto es una frase para escribir en el archivo de demostración\n"
  );
}

archivo.end();
