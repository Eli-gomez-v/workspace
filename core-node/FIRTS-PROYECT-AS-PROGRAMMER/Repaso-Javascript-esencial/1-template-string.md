# Template strings

Las "template strings" (también conocidas como "template literals") en JavaScript son una forma de crear cadenas de texto más legibles y flexibles al permitir la interpolación de variables y expresiones dentro de ellas. Se definen utilizando comillas invertidas (`) en lugar de las comillas simples ('') o dobles (""). Aquí tienes una explicación básica junto con ejemplos:

1. **Sintaxis básica:**
   Para crear una template string, utiliza comillas invertidas (\`) para delimitar el texto.

   ```javascript
   const nombre = "Juan";
   const mensaje = `Hola, ${nombre}!`;
   console.log(mensaje);
   ```

   En este ejemplo, `${nombre}` se interpola en la cadena, y el resultado será "Hola, Juan!".

2. **Expresiones dentro de template strings:**
   Puedes incluir expresiones dentro de las template strings. Estas expresiones se evalúan y su resultado se incorpora en la cadena.

   ```javascript
   const x = 5;
   const y = 10;
   const resultado = `La suma de ${x} y ${y} es ${x + y}.`;
   console.log(resultado);
   ```

   El resultado será "La suma de 5 y 10 es 15.".

3. **Multilínea:**
   Las template strings también facilitan la creación de cadenas multilínea sin necesidad de caracteres de escape.

   ```javascript
   const poema = `
   En un lugar de la Mancha
   de cuyo nombre no quiero acordarme,
   no ha mucho tiempo que vivía
   un hidalgo de los de lanza en astillero...
   `;
   console.log(poema);
   ```

   Esto generará un bloque de texto con saltos de línea.

4. **Anidación de template strings:**
   Puedes anidar template strings dentro de otras.

   ```javascript
   const nombre = "María";
   const saludo = `Hola, ${`Querida ${nombre}`}!`;
   console.log(saludo);
   ```

   En este caso, el resultado será "Hola, Querida María!".

Ahora, aquí tienes algunos ejercicios para practicar:

**Ejercicio 1:**
Crear una template string que incluya tu nombre y edad, y luego imprimir el resultado.

**Ejercicio 2:**
Calcular el área de un rectángulo con una template string que muestre la fórmula y el resultado. Puedes utilizar variables para la longitud y el ancho del rectángulo.

**Ejercicio 3:**
Crear una template string que describa tu película favorita, incluyendo el título, el género y un breve resumen.

**Ejercicio 4:**
Crear una función que tome dos nombres como argumentos y devuelva una template string que los concatene en una frase.

Estos ejercicios te ayudarán a practicar el uso de las template strings en JavaScript y a comprender mejor cómo funcionan.