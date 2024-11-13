# Proyecto de Cronómetro

Este proyecto implementa un cronómetro utilizando JavaScript. Incluye funcionalidades para iniciar, detener, alternar y reiniciar el cronómetro. Además, se proporcionan pruebas unitarias para asegurar el correcto funcionamiento del cronómetro.

## Estructura del Proyecto

- **index.js**: Contiene la lógica principal del cronómetro.
- **index.test.js**: Pruebas unitarias con Jest para validar las funciones del cronómetro.
- **run_index.js**: Proporciona una interfaz de línea de comandos para interactuar con el cronómetro.
- **index.html**: Interfaz web para visualizar y controlar el cronómetro.

## Funcionalidades

### index.js

Este archivo contiene las siguientes funciones:

- **startTimer(updateDisplay)**: Inicia el cronómetro y actualiza la pantalla cada segundo.
- **stopTimer()**: Detiene el cronómetro.
- **toggleTimer(updateDisplay)**: Alterna entre iniciar y detener el cronómetro.
- **resetTimer(updateDisplay)**: Reinicia el cronómetro y actualiza la pantalla.

### index.test.js

Este archivo contiene pruebas unitarias para las funciones del cronómetro utilizando Jest. Las pruebas incluyen:

- Iniciar el cronómetro y actualizar la pantalla.
- Detener el cronómetro correctamente.
- Manejar errores al intentar iniciar o detener el cronómetro cuando ya está en el estado correspondiente.
- Manejar correctamente los minutos y segundos.
- Alternar entre iniciar y detener el cronómetro.
- Reiniciar el cronómetro.

### run_index.js

Este archivo proporciona una interfaz de línea de comandos para interactuar con el cronómetro. Las opciones disponibles son:

1. Iniciar/Pausar el cronómetro.
2. Detener el cronómetro.
3. Reiniciar el cronómetro.
4. Salir de la aplicación.

Para ejecutar este archivo, utiliza el siguiente comando:

```bash
node run_index.js "Enter" he ir dando "Enter" para seleccionar los puntos arriba descritos.

## Archivos que se adjuntan:
tema-10 (eli_gomez_tema_10.zip)
.
├── coverage
│   ├── clover.xml
│   ├── coverage-final.json
│   ├── lcov.info
│   └── lcov-report
├── index.html
├── jest.config.js
├── package.json
├── README.md
├── src
│   ├── index.js
│   └── run_index.js
└── tests
    └── index.test.j
```
