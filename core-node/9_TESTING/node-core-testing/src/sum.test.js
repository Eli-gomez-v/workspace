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