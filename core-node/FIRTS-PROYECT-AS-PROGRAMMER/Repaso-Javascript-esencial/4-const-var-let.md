# Constantes, variables y alcance

En JavaScript, `const`, `let`, y `var` son formas de declarar variables que tienen diferentes alcances y comportamientos. Aquí te explicaré cada uno de ellos con ejemplos:

1. `var`:
   - `var` se utilizaba para declarar variables en JavaScript antes de la introducción de `const` y `let`. Aunque aún es válido, su uso se ha vuelto menos común debido a sus peculiaridades.
   - Las variables declaradas con `var` tienen un alcance de función o global, lo que significa que están disponibles en todo el ámbito de la función o, si se declaran en el nivel superior, en todo el archivo o script.
   - Las variables declaradas con `var` pueden ser redeclaradas y reasignadas.

Ejemplo de `var`:

```javascript
function ejemploVar() {
  if (true) {
    var x = 10;
  }
  console.log(x);  // Esto funcionará, x está disponible en toda la función
}

ejemploVar();
console.log(x);  // Esto generará un error, x no está disponible fuera de la función
```

2. `let`:
   - `let` se introdujo en ES6 (ECMAScript 2015) y es preferido sobre `var` para declarar variables.
   - Las variables declaradas con `let` tienen un alcance de bloque, lo que significa que están limitadas al bloque más cercano en el que se declaran.
   - Las variables declaradas con `let` no pueden ser redeclaradas en el mismo ámbito, pero sí pueden ser reasignadas.

Ejemplo de `let`:

```javascript
function ejemploLet() {
  if (true) {
    let y = 20;
  }
  console.log(y);  // Esto generará un error, y está limitado al bloque if
}

ejemploLet();
```

3. `const`:
   - `const` también se introdujo en ES6 y se utiliza para declarar variables cuyos valores no cambiarán.
   - Al igual que `let`, las variables declaradas con `const` tienen un alcance de bloque.
   - Las variables declaradas con `const` no pueden ser reasignadas ni redeclaradas.

Ejemplo de `const`:

```javascript
function ejemploConst() {
  const z = 30;
  // z = 40;  // Esto generará un error, no puedes reasignar una variable constante
}

ejemploConst();
```

En resumen, `var` se utiliza con menos frecuencia en la programación moderna de JavaScript, y es preferible usar `let` para variables que pueden cambiar de valor y `const` para variables que no deben cambiar después de su inicialización. Estas diferencias en el comportamiento y el alcance de las variables son importantes para escribir un código más limpio y predecible.