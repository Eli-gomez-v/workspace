# Introducción

1. Crea un paquete desde cero llamado node-core-testing

2. Instala las siguientes dependencias: Ninguna

3. Crea una carpeta llamada src

4. Crea un archivo llamado sum.js con el siguiente contenido dentro de src:

```js
// This file uses commonjs module syntax. This is the default in Node.js.

/**
 * This is a sum function that adds two numbers.
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} - The sum of `a` and `b`.
 * @example
 * sum(1, 2); // 3
 */
function sum(a, b) {
  return a + b;
}

module.exports = sum;

/**
 * This file uses ecma module syntax. This is the default in browsers.
 *
 * If we want to use this file in Node.js, we need to add the following
 * line to package.json:
 *
 * "type": "module"
 *
 * export default function sum(a, b) {
 * return a + b;
 * }
 * */
```

5. Crea un archivo llamado sum.test.js con el siguiente contenido:

```js
// this file is written using commonjs module syntax. This is the default in Node.js.

const test = require("node:test");
const assert = require("node:assert");
const sum = require("./sum");

test("Sumar 1 + 2 es es igual a 3", () => {
  const current = sum(1, 2);
  const expected = 3;
  assert.strictEqual(current, expected);
});

// To do this using ecma module syntax, we need to use the following syntax to import :
// import { strictEqual } from "node:assert";
// import { test } from "node:test";
// import sum from "./sum.js";
//
```

6. Añadir a los scripts el siguiente comando para poder ejecutar los tests de varias:

```json
    "test": "node src/sum.test.js"
```

7. Esta es la forma mas rápida que he encontrado para crear un paquete de npm desde cero node:test y node:asset para testing, os animo a revisar la libreria de testing para mas información.

- https://nodejs.org/api/test.html
- https://nodejs.org/api/assert.html
