# Destructuración

La destructuración en JavaScript es una característica que te permite extraer valores de objetos o arreglos de una manera más concisa y legible. Esta técnica se utiliza frecuentemente para asignar valores a variables de una manera más sencilla. Aquí te proporcionaré ejemplos tanto de la destructuración de objetos como de arreglos.

### Destructuración de Objetos

Supongamos que tienes un objeto JavaScript:

```javascript
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "México"
};
```

Para extraer valores de este objeto, puedes hacer lo siguiente:

#### Ejemplo 1: Extracción de valores en variables

```javascript
const { nombre, edad } = persona;

console.log(nombre); // "Juan"
console.log(edad);   // 30
```

#### Ejemplo 2: Cambiar el nombre de la variable al extraerla

```javascript
const { nombre: nombrePersona, edad: edadPersona } = persona;

console.log(nombrePersona); // "Juan"
console.log(edadPersona);   // 30
```

### Destructuración de Arreglos

Supongamos que tienes un arreglo:

```javascript
const frutas = ["manzana", "plátano", "uva"];
```

Para extraer valores de este arreglo, puedes hacer lo siguiente:

#### Ejemplo 3: Extracción de valores en variables

```javascript
const [fruta1, fruta2] = frutas;

console.log(fruta1); // "manzana"
console.log(fruta2); // "plátano"
```

#### Ejemplo 4: Ignorar elementos del arreglo

```javascript
const [fruta1, , fruta3] = frutas;

console.log(fruta1); // "manzana"
console.log(fruta3); // "uva"
```

### Combinación de Destructuración de Objetos y Arreglos

Puedes combinar la destructuración de objetos y arreglos para extraer valores de objetos anidados en arreglos u objetos anidados.

Supongamos que tienes el siguiente objeto anidado en un arreglo:

```javascript
const datos = [
  {
    nombre: "María",
    detalles: {
      edad: 25,
      ciudad: "Madrid"
    }
  },
  {
    nombre: "Carlos",
    detalles: {
      edad: 30,
      ciudad: "Barcelona"
    }
  }
];
```

Para extraer la edad de María, puedes hacer lo siguiente:

#### Ejemplo 5: Extracción de valores de objetos anidados en un arreglo

```javascript
const [{ detalles: { edad: edadMaria } }] = datos;

console.log(edadMaria); // 25
```

La destructuración en JavaScript puede hacer que tu código sea más legible y eficiente al extraer los valores que necesitas de objetos y arreglos de una manera más sencilla. Estos ejemplos te dan una idea de cómo funciona, pero ten en cuenta que la destructuración es una técnica poderosa que se puede utilizar de muchas maneras en tu código.