# Proyecto de Programación Web con Networking

Este proyecto tiene como objetivo practicar las peticiones de red utilizando `fetch` y mostrar el contenido de artículos desde una API.

## Estructura del Proyecto

- **index.html**: Página web principal donde se muestran los artículos.
- **index.js**: Contiene la lógica de las peticiones `fetch` para obtener artículos.
- **index.test.js**: Pruebas unitarias con Jest para validar las funciones.
- **README.md**: Instrucciones del proyecto.

## Funcionalidades

1. Obtiene un artículo específico desde la URL `https://jsonplaceholder.typicode.com/posts/1`.
2. Permite cambiar el número de artículo para recibir otro.
3. Recibe la lista completa de artículos y los muestra en una tabla.

## Pruebas

Para ejecutar las pruebas unitarias con Jest:

```bash
npm install
npm run test

### Resumen:

- **index.js** contiene la lógica para realizar peticiones `GET` a la API y mostrar los artículos.
- **index.test.js** incluye las pruebas unitarias con Jest para asegurarse de que las funciones funcionan correctamente.
- **index.html** es la interfaz donde se mostrará la información.
- **README.md** describe el proyecto y cómo ejecutarlo.

## Archivos que se adjuntan:
tema-11 (eli_gomez_tema_11.zip)
.
├── coverage
│   ├── clover.xml
│   ├── coverage-final.json
│   ├── lcov.info
│   └── lcov-report
├── README.md
├── src
│   ├── index.html
│   ├── index.js
│   └── runIndex.js
└── tests
    ├── index.test.js
    ├── jest.config.js
    └── package.json


```
