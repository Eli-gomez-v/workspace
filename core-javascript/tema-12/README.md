# Proyecto de Sets en JavaScript

Este proyecto contiene un conjunto de funciones para manipular conjuntos (Sets) en JavaScript, abarcando operaciones como intersección, unión, diferencia, verificación de subconjuntos, cálculo de valores mínimos y máximos, y obtención de valores dentro de un rango numérico.

## Archivos

- `index.js`: Contiene las funciones principales del proyecto.
- `run_index.js`: Permite ejecutar las funciones desde la consola de Node.js.
- `index.test.js`: Incluye pruebas unitarias para verificar cada función.
- `index.html`: Permite interactuar con las funciones en un navegador web.
- `README.md`: Explicación del proyecto.
  .
  ├── coverage
  │ ├── clover.xml
  │ ├── coverage-final.json
  │ ├── lcov.info
  │ └── lcov-report
  ├── README.md
  ├── src
  │ ├── index.html
  │ ├── index.js
  │ └── run_index.js
  └── tests
  ├── index.test.js
  ├── jest.config.js
  └── package.json

## Ejercicios

1. **Intersección de Sets**: Obtiene los elementos comunes entre dos conjuntos.
2. **Unión de Sets**: Combina dos conjuntos en uno solo, sin valores duplicados.
3. **Diferencia de Sets**: Extrae los elementos que están en un conjunto pero no en otro.
4. **Subset**: Verifica si un conjunto es subconjunto de otro.
5. **Min y Max**: Encuentra el valor mínimo y máximo en un conjunto.
6. **Valores en Rango**: Devuelve todos los valores en un conjunto que están dentro de un rango numérico.

## Ejecución

1. **Desde el navegador**: Abre `index.html` en el navegador.
2. **Desde Node.js**: Ejecuta `run_index.js` en la consola usando `node run_index.js`.
3. **Pruebas**: Corre las pruebas con `jest` usando `npm test`.

## Requerimientos

- Node.js
- Jest (para pruebas)
