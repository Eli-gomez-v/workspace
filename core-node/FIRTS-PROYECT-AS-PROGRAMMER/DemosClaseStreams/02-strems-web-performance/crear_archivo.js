const fs = require("fs");
const archivo = fs.createWriteStream("big.file");

for (let i = 0; i <= 1e5; i++) {
  archivo.write(
    "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.\n"
  );
}

archivo.end();
