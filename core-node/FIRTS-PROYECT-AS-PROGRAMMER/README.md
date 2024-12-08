# FIRTS-PROJECT-AS-PROGRAMMER 🚀

## Resumen de Ejercicios de Node.js

Este proyecto contiene una serie de ejercicios prácticos de Node.js que te ayudarán a dominar conceptos y técnicas esenciales para el desarrollo backend.  A continuación, un resumen de los desafíos que he superado:

### Ejercicio 2: Exploración de Directorios y Archivos 📂

**Descripción**:  Imagina que necesitas encontrar un archivo específico en un laberinto de carpetas. ¡Este ejercicio te enseña cómo hacerlo con Node.js! La función `findFiles`  recorre un directorio y sus subdirectorios, listando todos los archivos y carpetas como un explorador profesional.

**Conceptos Clave**:

- **Módulo `fs`**: Piensa en él como tu navaja suiza para interactuar con el sistema de archivos.  Te permite leer, escribir y manipular archivos y directorios a tu antojo.
- **Recursión**:  ¿Has visto esas muñecas rusas que contienen una dentro de otra? La recursión es similar: una función se llama a sí misma para resolver un problema, ¡ideal para explorar directorios!
- **Promesas y funciones asíncronas**:  Node.js es como un chef en una cocina ajetreada: maneja muchas tareas a la vez (asíncronía). Las promesas y `async/await` nos ayudan a organizar este caos y que todo fluya.

**Mejoras futuras**:

- **Manejo de errores**:  "Errar es humano", dice el refrán.  Añadiré un manejo de errores robusto para que el programa no se rompa ante cualquier imprevisto (permisos, directorios inexistentes...).
- **Optimización de rendimiento**:  Cuando tienes miles de archivos, la eficiencia es clave. Implementaré técnicas como la lectura en paralelo para que la búsqueda sea ultra rápida.

### Ejercicio 3: Trabajar con Rutas 🗺️

**Descripción**:  ¿Te pierdes fácilmente? ¡El módulo `path` de Node.js es tu GPS para el sistema de archivos! Este ejercicio te enseña a manipular rutas de archivos y directorios como un experto: combinar, resolver rutas absolutas y normalizarlas.

**Conceptos Clave**:

- **Módulo `path`**:  Tu brújula para navegar por el sistema de archivos.  Te permite trabajar con rutas de forma independiente del sistema operativo (Windows, macOS, Linux).
- **Funciones `path.join`, `path.resolve`, `path.normalize`**:  Las herramientas esenciales para unir, resolver y estandarizar rutas de manera eficiente.

**Mejoras futuras**:

- **Validación de rutas**:  Antes de lanzarnos a la aventura, ¡hay que asegurarse de que el camino existe! Implementaré validaciones para que las rutas sean válidas y accesibles.
- **Compatibilidad multiplataforma**:  Un buen explorador se adapta a cualquier terreno.  Aseguraré que las rutas funcionen a la perfección en diferentes sistemas operativos.

### Ejercicio 3: Búsqueda de Archivos `.json` 🕵️‍♂️

**Descripción**:  Imagina que necesitas encontrar todos los archivos de configuración (`.json`) en un proyecto gigante. Este ejercicio te enseña a hacerlo con Node.js. La función `findJsonFiles`  recorre directorios y subdirectorios, listando todos los archivos `.json` como un detective profesional.

**Conceptos Clave**:

- **Filtrado de archivos por extensión**:  Usaremos `path.extname` para encontrar los archivos con la extensión `.json`, como si tuviéramos un filtro mágico.
- **Recursión**:  ¡De nuevo la recursión al rescate! Exploraremos subdirectorios para no perdernos ni un solo archivo `.json`.

**Mejoras futuras**:

- **Manejo de archivos grandes**:  ¿Qué pasa si tenemos millones de archivos? Implementaré técnicas para que el programa no se ahogue en un mar de datos.
- **Paralelización**:  Para acelerar la búsqueda, dividiremos el trabajo entre varios "buscadores" que trabajen simultáneamente.

### Ejercicio 4: Implementación de Fibonacci 🔢

**Descripción**:  La secuencia de Fibonacci es un clásico de la programación. Este ejercicio te reta a implementarla en Node.js. La función `fibonacci` calcula el `n`-ésimo número de Fibonacci de manera iterativa.

**Conceptos Clave**:

- **Algoritmos**:  Aprenderás a implementar algoritmos en Node.js, ¡la base de la programación!
- **Bucle y condiciones**:  Usaremos bucles (`for`) y condiciones (`if`) para calcular la secuencia, como si siguiéramos una receta paso a paso.

**Mejoras futuras**:

- **Optimización del algoritmo**:  Existen versiones más eficientes del algoritmo de Fibonacci.  Implementaré una que use memoización para evitar cálculos repetidos.
- **Manejo de grandes números**:  Para números gigantes en la secuencia, usaré bibliotecas como `bigint` para que no nos quedemos cortos.

## Conceptos y Definiciones 📖

### Node.js

Node.js es como un motor que permite ejecutar JavaScript fuera del navegador web.  Es ideal para construir aplicaciones web escalables y de alto rendimiento, ¡como las que usan Netflix o Uber!

### Módulo `fs`

Tu navaja suiza para interactuar con el sistema de archivos. Lee, escribe y manipula archivos y directorios con facilidad.

### Módulo `path`

Tu brújula para navegar por el sistema de archivos.  Te ayuda a trabajar con rutas de forma independiente del sistema operativo.

### Recursión

Una técnica donde una función se llama a sí misma, como esas muñecas rusas que contienen una dentro de otra.  Perfecta para explorar estructuras jerárquicas.

### Promesas y Funciones Asíncronas

Node.js es como un chef que maneja muchas tareas a la vez. Las promesas y `async/await` nos ayudan a organizar el código asíncrono para que sea más legible.

## Agradecimientos 🙏

Un enorme agradecimiento al profesor Jessie Buckland Perez por su guía y apoyo durante el curso.  ¡Su pasión por Node.js es contagiosa!

---

### Estructura carpetas FIRTS-PROYECT-AS-PROGRAMMER

.
├── core-node-eli
│   ├── apps
│   ├── eslint.config.js
│   ├── jest.config.ts
│   ├── jest.preset.js
│   ├── node_modules
│   ├── nx.json
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── tsconfig.base.json
├── Ejercicios realizados
│   ├── core-node-web
│   ├── Eli-ejercicio-tema-2
│   ├── Eli-ejercicio-tema-3
│   ├── Eli-ejercicio-tema-4
│   ├── Eli-ejercicio-tema-5
│   └── Eli-ejercicio-tema-6
└── README.md
¡Espero que esta información te sea útil! 😄

### Ejercicio 1: Exploración de Directorios y Archivos 📂

**Ejemplo de código:**

```javascript
const fs = require('fs/promises');
const path = require('path');

async function findFiles(dir) {
  try {
    const entries = await fs.readdir(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stats = await fs.stat(fullPath);
      if (stats.isDirectory()) {
        console.log(`Directorio: ${fullPath}`);
        await findFiles(fullPath); // Llamada recursiva para explorar subdirectorios
      } else {
        console.log(`Archivo: ${fullPath}`);
      }
    }
  } catch (err) {
    console.error(`Error al explorar el directorio: ${err}`);
  }
}

// Ejemplo de uso
findFiles('./mi_directorio');

```

### Cómo ejecutar el código

## Guarda el código: Guarda el código anterior en un archivo llamado findFiles.js

**Abre la terminal**:
Linux/macOS: Abre la terminal.
Windows: Abre el Símbolo del sistema o PowerShell.
Navega al directorio: Usa el comando cd para navegar al directorio donde guardaste findFiles.js. Por ejemplo: cd /ruta/a/tu/directorio.
Ejecuta el código: Escribe **node findFiles.js** y presiona Enter.
Explicación de la compatibilidad:

Módulo **path**: El módulo path de Node.js se encarga de manejar las diferencias entre sistemas operativos en cuanto a la construcción de rutas.

## La función path.join une las partes de una ruta usando el separador correcto para cada sistema operativo ( / para Linux/macOS y \ para Windows)

## Puntos importantes

- Rutas relativas: El ejemplo usa una ruta relativa (./mi_directorio). Asegúrate de que mi_directorio exista en el mismo lugar donde se encuentra el archivo findFiles.js.
- Rutas absolutas: También puedes usar rutas absolutas, por ejemplo: **/home/usuario/mi_directorio en Linux/macOS o C:\Users\usuario\mi_directorio en Windows**.
Con este código y las instrucciones, podrás explorar directorios en cualquier sistema operativo sin problemas.

## ¡Es hora de ponerlo a prueba! 🚀
