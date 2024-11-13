# Ejercicio: Página web con bucle infinito de multiplicación

## Descripción

El ejercicio consiste en una página web que pregunta al usuario por dos números, los multiplica y muestra el resultado. El proceso se repite en un bucle infinito hasta que el usuario decida cancelarlo. Adicionalmente, la página incluye un botón para cerrar la pestaña del navegador. El diseño de la página es simple, con un fondo azul claro y botones estilizados.

## Estructura de archivos

- **EVALUACION_ejerc_7.html**: Archivo principal que contiene la estructura HTML y los estilos CSS.
- **EVALUACION_ejerc_7.js**: Archivo JavaScript que contiene las funciones encargadas de ejecutar el bucle y cerrar la página.
  
## HTML (.html) https://whatwg.org/

El archivo `.html` está compuesto por:
- **`<button onclick="iniciarBucle()">`**: Botón para iniciar el bucle que pregunta por dos números y calcula su multiplicación.
- **`<button onclick="cerrarPagina()">`**: Botón que cierra la página.
- **`<style>`**: Define un estilo envolvente para la página, incluyendo un color de fondo suave y estilos para los botones.

### Estructura CSS: https://css-tricks.com/
- **Color envolvente**: El fondo de la página utiliza el color `#f0f8ff`, un azul suave.
- **Botones**: Están estilizados con un color de fondo verde azulado (`#008080`), y el estilo cambia al pasar el cursor con `hover`.
- **Centrado de contenido**: Se utiliza `flexbox` para centrar los elementos en la página tanto vertical como horizontalmente.

## JavaScript (EVALUACIÓN_ejerc_7.js)

El archivo contiene dos funciones principales:

### 1. iniciarBucle()
Esta función ejecuta un bucle infinito que solicita al usuario dos números a través de prompt(). Valida que los valores introducidos sean números, y en caso de que el usuario cancele el prompt, termina el bucle utilizando break. El resultado de la multiplicación se muestra en una ventana alert().

## Métodos clave usados:

prompt(): Recoge la entrada del usuario.
parseFloat(): Convierte las entradas de texto en números decimales.
alert(): Muestra el resultado de la multiplicación.
break: Rompe el bucle cuando se cancela la entrada.

### 2. cerrarPagina()
Esta función cierra la página web mediante el método window.close(), la acción de cerrar una pestaña es una funcionalidad estándar en JavaScript.
