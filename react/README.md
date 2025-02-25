# REACT

1. Al instalar las dependencias en React en global

```javascript
npx create-react-app my-app
```

- Se produce un problema con los localhost y al intentar liverarlos
      - Al final hay que desinstalarlas

```bash
npm uninstall react react-dom react-scripts
```

1. Detener Ngnix

```bash
sudo systemctl stop nginx
```

2. Deshabilitar Nginx

```bash
sudo systemctl disable nginx
```

3. Verificar que Nginx está detenido

```bash
sudo systemctl status nginx
```

4. Reiniciar la aplicación según indicaciones de tu package.json

```bash
npm run start-dev
npm run start-services
npm run stop-services
```

5. La mejor opción es crear una nueva carpeta y reiniciarla como un nuevo proyecto:

```bash
mkdir react-project
cd react-project
npm init -y
npm install react react-dom # Instalar dependencias de React
npm install --save-dev create-react-app-my-app # Herr de Desarrollo glogal
npx create-react-my-app # Crear la estrutucra del proyecto autmátiamente.
```

## Vista de package.json

```json
{
  "name": "react-project",
  "version": "1.0.0",
  "description": "A new React project",
  "main": "index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "keywords": [],
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "create-react-app": "^5.0.0"
  }
}
```

```bash
npm start
```

## Verificar y solucionar problemas de vulnerabilidades

```bash
npm audit
npm audit fix
npm audit fix --foce
```
>NOTA: npx create-react-app my-app

Creating a new React app in /home/curso/Escritorio/workspace/my-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1324 packages in 50s

267 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: my-app@0.1.0
npm ERR! Found: react@19.0.0
npm ERR! node_modules/react
npm ERR!   react@"^19.0.0" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^18.0.0" from @testing-library/react@13.4.0
npm ERR! node_modules/@testing-library/react
npm ERR!   @testing-library/react@"^13.0.0" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR! 
npm ERR! 
npm ERR! For a full report see:
npm ERR! /home/curso/.npm/_logs/2025-01-23T14_38_58_736Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/curso/.npm/_logs/2025-01-23T14_38_58_736Z-debug-0.log
`npm install --no-audit --save @testing-library/jest-dom@^5.14.1 @testing-library/react@^13.0.0 @testing-library/user-event@^13.2.1 web-vitals@^2.1.0` failed: El error indica que hay un conflicto de dependencias al intentar instalar las dependencias del proyecto React. Vamos a resolver este problema utilizando la opción `--legacy-peer-deps` para permitir la instalación de dependencias con conflictos de versiones.

### Paso 1: Crear el Proyecto React con `create-react-app`

Ejecuta el siguiente comando para crear un nuevo proyecto React utilizando `create-react-app` y resolver los conflictos de dependencias:

```bash
npx create-react-app my-app --legacy-peer-deps
```

### Paso 2: Navegar al Directorio del Proyecto

Navega al directorio del proyecto recién creado:

```bash
cd my-app
```

### Paso 3: Iniciar el Proyecto React

Inicia el proyecto React:

```bash
npm start
```

Esto debería iniciar tu aplicación React en `http://localhost:3000`.

### Resumen

1. **Crear el Proyecto React con `create-react-app`**: Usa la opción `--legacy-peer-deps` para resolver conflictos de dependencias.
2. **Navegar al Directorio del Proyecto**: Cambia al directorio del proyecto recién creado.
3. **Iniciar el Proyecto React**: Usa `npm start` para iniciar el proyecto.

Al seguir estos pasos, deberías poder crear y ejecutar tu proyecto React sin problemas de dependencias.

```bash
npx create-react-app my-app --force
```


## Ejercicios clase

## Paso 1: Crear una Nueva app de React

- Create React App: Facebook ha desarrollado un
entorno  que  viene  con  todo  lo  que  se  necesita
para  arrancar  una  aplicación  de  **React**
pre-configurado.

- Crea  un  servidor  de  desarrollo,  usa  Webpack
para compilar **JSX y ES6**, configura archivos **css** y
usa **ESLint**  para  evitar  errores  en  el  código.

- Ejecuta: `npx create-react-app my-app`
- Navega a la carpeta `react/clase1` y copia `my-app` y cambia el nombre por `my-second-app`.
- Realiza estos pasos con los sucesivos ejercicios y sigue las indicaciones a ejecutar en los mismos.

### Babel y `babel-preset-react-app`

## ¿Qué es Babel?

Babel es un compilador de JavaScript que permite usar la sintaxis más reciente de JavaScript y características de ECMAScript en navegadores que no las soportan nativamente. Babel convierte el código moderno en una versión compatible con navegadores más antiguos.

## ¿Qué es un Preset?

Un preset en Babel es un conjunto de plugins y configuraciones predefinidas que facilitan la configuración de Babel para un propósito específico. `babel-preset-react-app` es un preset diseñado específicamente para aplicaciones React creadas con Create React App.

## ¿Por Qué Usar `babel-preset-react-app`?

- **Simplicidad**: Proporciona una configuración lista para usar que incluye todos los plugins necesarios para compilar código React.
- **Compatibilidad**: Asegura que tu código React sea compatible con una amplia gama de navegadores.
- **Optimización**: Incluye configuraciones y plugins que optimizan el rendimiento de tu aplicación React.

## Cómo Agregar `babel-preset-react-app`

Para agregar `babel-preset-react-app` a tu proyecto, sigue estos pasos:

### 1. Instalar `babel-preset-react-app`

Ejecuta el siguiente comando para instalar `babel-preset-react-app`:

```bash
npm install --save-dev babel-preset-react-app
```

## Ejercicio 1: my-second-app

- Eliminar archivos en la carpeta `/src`dejar solo `index.js e index.css`
- Importar:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}
/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/
//Utilizamos root ya que utilizo React 18 en lugar de render, para renderizar la aplicación.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// En index.css cambiar el Estilo Tag h1:
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1 {
  color: blue;
  text-align: center;
}
```


### Solucionar problemas de errores relacionados con el límite de observadores de archivos al ejecutar aplicaciones React

- La mejor opción es aumentar el límite de observadores de archivos permanentemente.

  - **Escalabilidad**: maneja archvivos simultáneamente en un entorno de multiples proyectos.
  - **Simplicidad**: Sencilla de implementar y no requiere cambios en la config de cada proyecto.
  - **Permanencia**: No volver a aplicarlo cada vez que reinicie el sistema.
  - **Compatibilidad**: Con cualquier herramienta o framework que utilices en los proyectos porque afecta a todo el sistema.
  - **Eficiencia**: No necesrio modificar la config de cada proyecto así se ahorra tiempo y reduce la complejidad.
  - **Estabilidad**: Aumentar el límite de observadores de archivos de manera permanente asegura que no te volverás a encontrar con el mismo problema en el futuro
  - Incluso si añades más proyectos o archivos a tu workspace.

- Esta opción es compatible y recomendable de implementar aplicando **Webpack** para mejorar el rendimiento y la estabilidad del entorno de desarrollo.
  
  - Usar **--watch-poll** en **Webpack** solución específica para la misma que reduce el uso de observadores de archivos al usar un mecanismo de sondeo en lugar de observadores de archivos nativos.

    - Esto es útil si hay problemas de rendimiento incluso después de aumentar el límite.

```bash
# Para ver en el navegador:
cd /home/curso/Escritorio/workspace/react/my-second-app
npm start

# Si el sistema ha alcanzado el número de observadores de archivos. 
# Común en Linux cuando se trabaja con proyectos grandde o múltipes proyectos que requieren muchos observadores de archivos.
# Se puede aumentar el límite de observadores de los mismo.

# 1. Verificar el límite actual: 
cat /proc/sys/fs/inotify/max_user_watches

# 2. Aumentar el límite temporalmente:
sudo sysctl fs.inotify.max_user_watches=524288 # Ejemplo si se apróx al que sale del punto 1.

# 3. Aumentar el límite permanent editando el archivo sysctl.conf y añadir:
sudo nano /etc/sysctl.conf
fs.inotify.max_user_watches=524288

# 4. Reiniciar el servidor de desarrollo
sudo sysctl -p

# Modificar el script de inicio de package.json 
{
  "scripts": {
    "start": "webpack serve --watch-poll"
  }
}

# 5. Reiniciar el servidor de Desarrollo navegando hasta la aplicación que quieres iniciar:

cd /home/curso/Escritorio/workspace/react/clase4/my-tenth-app
npm start

# Otras soluciones:

# Reducir el número de archivos observados:
.gitignore # para excluir archivos y directorios innecesarios
chokidar # con opciones específicas y configurarlo para usar menos recursos
  const chokidar = require('chokidar');
const watcher = chokidar.watch('.', {
  ignored: /node_modules|\.git/,
  persistent: true,
  usePolling: true,
  interval: 100,
});

# Aumentar el límite de max_user_instances: Además se puede aumentar el siguiente archivos:
sudo sysctl fs.inotify.max_user_instances=1024
sudo sysctl -p

# Usar --watch-poll en webpack para reducir el uso de observadores de archivos
webpack --watch-poll

# Revertir cambios en sysctl.conf: abrir el archivo
sudo nano /etc/sysctl.conf # elimina o comenta la línea añadida
# fs.inotify.max_user_watches=524288
# Aplicar los cambios
sudo sysctl -p

```

## Elementos del DOM

- Los  elementos  son  los  bloques  más  pequeños  de  las
aplicaciones de React.
- Un elemento describe lo que quieres ver en la pantalla.
- A diferencia de los elementos del DOM de los navegadores, los
elementos de React son objetos planos, y su creación es de bajo
coste.  
- React  DOM  se  encarga  de  actualizar  el  DOM  para  que
coincida con los elementos de React.
- No hay que confundir los elementos con los “componentes”. Los
elementos son los que constituyen los componentes.

- Para renderizar un elemento de React, primero pasamos el elemento del DOM a ReactDOM.createRoot(),
luego pasamos el elemento de React a `root.render()`:

```javascript
const root = ReactDOM.createRoot (
  document.getElementById ('root')
);
const element = <h1>Hello, World</h1>
root.render(element);
```

## Actualizar un elemento renderizado

- Los elementos de react son inmutables. Una vez creas un elemento, no puedes cambiar sus hijos o atributos.
- Con  nuestro  conocimiento  hasta  este  punto,  la  única
manera de actualizar la interfaz de usuario es creando
un nuevo elemento, y pasarlo a `root.render()`.
- En la práctica, la mayoría de las aplicaciones de React
solo  llaman  a  `root.render()`  una  vez.  
- En  las  siguientes
secciones  aprenderemos  cómo  el  código  se  puede
encapsular en componentes con estado.
- Aunque creamos un elemento en cada instante, React
DOM  sólo  actualiza  el  texto  del  nodo  cuyo  contenido
cambia. Abrir el inspector y revisarlo.

```javascript
//src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
function tick() {
  const element = {
    <div>
    <h1>Hello, World!</h1>
    <h2>It is {new Date().toLocaleTimeStrign()}.</h2>
    </div>
  };
  root.render(element);}

  setInterval(tick, 1000);
  ```

## Componentes

- Los componentes son como las funciones de JavaScript, aceptan entradas arbitrarias (llamadas “props” -
abreviatura  de  propiedades)  y  retornan  elementos  de  React  que  describen  lo  que  debe  aparecer  en  la pantalla.
Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.
Casi todo en React consiste en componentes. Hasta ahora hemos creado un único componente App dentro de index.js.

Los componentes suelen tener su propio archivo, así que vamos a copiar el proyecto my-second-app de la clase 1 en otra carpeta de nombre my-third-app en la carpeta de la clase 2.

1. Creamos un archivo llamado App.js y movemos nuestra clase App de index.js a App.js
2. Exportamos nuestro componente con: export default App;
3. Importamos el componente App en index.js: import App from ‘./App’;
4. Observa la web, el resultado es el mismo.

## Componentes funcionales y de clase

### Existen 2 tipos

- Funcionales
  - Es la forma más sencilla de definir un componente
  - Se trata de una función de javascript que devuelve JSX
  - Debe devolver un único elemento padre
- Clase
  - Debe  tener  un  método  render  y  debe  devolver  un  único elemento padre
  - El  nombre  debe  empezar  por  una  letra  mayúscula  para diferenciarlo de los elementos HTML.
Se  pueden  mezclar  componentes  de  Clase  y  Funcionales.  
Por ejemplo:
  - Copiamos el proyecto my-third-app en my-fourth-app
  - Creamos un componente Table.js
  - Importamos el componente en App.js y lo mostramos

### Props Exercises

Otra  de  las  características  de  las  props  es  que  aceptan
elementos  o  componentes,  es  decir,  se  puede  enviar  un
componente a través de una prop.

- Creamos un elemento title que sea un h1 con un texto.

- Enviamos  ese  elemento  al  componente  Table  con  una
prop llamada title
- En  el  componente  Table  de  `Table.js`  obtenemos  la
propiedad title y la renderizamos arriba de la tabla

### Ejercicios a realizar

1. Replicar el código de clase:
○ Crear app my-timer-app con el código de la sección Actualizar un
elemento renderizado
○ App my-third-app con la refactorización de los componentes
○ App my-fourth-app con el renderizado de la tabla con datos hardcodeados
○ App my-fifth-app con el uso de props
2. Crear un App llamada my-greetings-app que contenga
○ Un componente llamado Welcome que acepte una prop name y muestre un
componente HTML h2 con el texto: “Hola {name}, bienvenido al curso de los
Albañiles Digitales”
○ El componente App debe renderizar 3 componentes Welcome con diferentes
nombres.

### Props Exercise

- Modificamos nuestro componente TableBody para recoger la propiedad peopleData y renderizar los
datos.
- Usamos el método map para obtener las filas a mostrar.

>NOTA: Las keys ayudan a React a identificar qué datos han cambiado, han sido añadidos o eliminados.

```javascript
//my-timer-app
//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  const element = (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);

// Refactorizar
// my-third-app
// App.js y mover la clase App de index.js a App.js (este archivo creado en src/)
import React from 'react';

class App extends React.Component {
  upperFunction = (name) => String(name).toUpperCase();

  getGreeting(user) {
    if (user) {
      return <h1>Hello, {this.upperFunction(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  render() {
    const name = 'John Doe';
    return this.getGreeting(name);
  }
}

export default App;

// Actualizar index.js para importar y renderizar el componente App:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/ src/Table.js
import Reac, { Component} from "react";
// Componente funcional con arrow function
const TableHeader = () => {
  return (
    <thead>
    <tr>
    <th>Name</th>
    <th>Job</th>
    </tr>
    </thead>
  );
};
// Componente funcional con función tradicional
function TableBody() {
  return (
    <tbody>
    <tr>
    <td>Charlie</td>
    <td>Janitor</td>
    </tr>
    </tbody>
  );
};
// Componente de clase
Class Table extends Component {
  render() {
    return (
      <table>
      <TableHeader />
      <TableBody />
      </table>
    );
  }
}
export default Table;

// my-fourth-app
// Crear el componente Table.js en src/ que define el componente Table:
import React, { Component } from 'react';

// Componente funcional con arrow function
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

// Componente funcional con función tradicional
function TableBody() {
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
    </tbody>
  );
}

// Componente de clase
class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default Table;
// Actualizar App.js para importar y Renderizar Table:
import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    );
  }
}

export default App;

// crear el componente Welcome en my-greetings-app dentro de src/ y define el componente Welcome:
import React from 'react';

function Welcome(props) {
  return <h2>Hola {props.name}, bienvenido al curso de los Albañiles Digitales</h2>;
}

export default Welcome;
// Actualizar App.js para Renderizar Welcome:
import React from 'react';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome name="Juan" />
      <Welcome name="María" />
      <Welcome name="Pedro" />
    </div>
  );
}

export default App;

// Actualizar index.js para importar y renderizar el componente App:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

## Props

Siguiendo  con  el  ejemplo  anterior,  ahora  tenemos  un componente Table pero con datos hardcodeados, por tanto, en una  aplicación  dinámica  no  tiene  sentido.  React  gestiona  los
datos a través de props (abreviatura de propiedades) y estado.

- Copiamos nuestro proyecto my-fourth-app en my-fifth-app.

- Creamos un array people con algunos registros con name
y job en el método render de App.js
- Enviamos  el  array  a  Table  a  través  de  una  propiedad
peopleData
- En  el  componente  Table  de  `Table.js`  obtenemos  la
propiedad  y  se  la  enviamos  a  TableBody  en  una
propiedad con el mismo nombre

```javascript
// my-fifth-app
// Actualizar App.js para enviar un array de personas como props al componente Table:
import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  render() {
    const people = [
      {
        name: "John",
        job: "Developer"
      },
      {
        name: "Maya",
        job: "Architect"
      }
    ];
    return (
      <div className="container">
    < Table peopleData={people} />
      </div>
    );
  }
}
export default App;
```

```javascript
// Actualiza Table.js para recibir y renderizar los datos de las personas a través de props:
import React, { Component } from 'react';

// Componente funcional con arrow function
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

// Componente funcional con función tradicional
function TableBody(props) {
  const rows = props.peopleData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

// Componente de clase
class Table extends Componet {
  render() {
    const { peopleData } = this.props;
    return (
      <table>
      <TableHeader />
      <TableBody peopleData={peopleData} />
      </table>
    );
  }
}
```

```javascript
function TableBody(props) {
  const rows = props.peopleData.map((row, index) => {
    return (
      <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}
```

```javascript
// Componentes con JSX
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Componente Heading utilizando JSX
const headingJSX = <h1 className="site-heading">Hello world</h1>;

// Componente Heading utilizando createElement
const headingCreateElement = React.createElement('h1', { className: 'site-heading' }, 'Hello world');

// Componente App con una variable name
const name = 'John Doe';
const headingWithName = <h1>Hello, {name}</h1>;

class App extends React.Component {
  upperFunction = (name) => String(name).toUpperCase();

  getGreeting(user) {
    if (user) {
      return <h1>Hello, {this.upperFunction(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  render() {
    const name = 'John Doe';
    return this.getGreeting(name);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

## Clase 3: Composición, Estado y Ciclo de Vida

### Estado: Ejemplo

Hasta ahora hemos añadido la funcionalidad para eliminar una persona, sin embargo, es habitual en una aplicación añadir registros dinámicamente. Vamos a añadir un formulario para hacerlo y actualizar nuestro estado.

1. **Eliminar Datos Hardcodeados**:
   - Inicializamos `people` como un array vacío.

2. **Crear un Nuevo Componente `Form`**:
   - Creamos un estado inicial.
   - Añadimos una función para actualizar el estado con el valor de los campos del formulario.
   - Creamos el formulario con un campo `name` y `job` y un botón de `Submit`.
   - Creamos una función `submitForm` que enviará los datos al prop `handleSubmit`.

3. **Añadir Función `handleSubmit` en `App.js`**:
   - Igual que con `removePeople`, creamos una función `handleSubmit` para añadir una persona en `App.js`.
   - Renderizamos debajo de la tabla el componente `Form` con el prop `handleSubmit` para enviarle la función que agrega la persona a nuestro estado `people`.

#### Estado: Componentes Funcionales

Hasta ahora hemos visto cómo se usa un estado en componentes de clase. Sin embargo, gracias a los hooks de estado añadidos en React 16.8, podemos usar estado y otras características de React sin escribir una clase.

1. **Copiar `my-seventh-app` en `my-seventh-functional-app`**:
   - Convertimos nuestra clase `App` en una función `App`.
   - Convertimos las funciones `removePeople` y `handleSubmit` en constantes.
   - Usamos el método `useState` para manipular el estado e inicializamos con el array de personas vacío.
   - Usamos la función `setPeople` para modificar el estado de `people`.
   - Cambiamos `this.state.people` por `people`, `this.state.removePeople` por `removePeople`, `this.title` por `title` y `this.handleSubmit` por `handleSubmit`.

#### Estado: Uso

Para hacer un uso correcto del estado hay que saber 4 cosas:

1. **No se puede modificar el estado directamente**:
   - Hay que utilizar `setState`.

2. **Las actualizaciones del estado pueden ser asíncronas**:
   - No debes confiar en los valores de `this.props` y `this.state` para calcular el siguiente estado.
   - Utiliza la segunda forma de `setState` que acepta una función en lugar de un objeto.

3. **Las actualizaciones de estado se fusionan**:
   - React combina el objeto que proporcionaste con el estado actual.

4. **Los datos fluyen hacia abajo**:
   - Ni los componentes padres o hijos pueden saber si un determinado componente tiene o no tiene estado y no les debería importar si se define como una función o una clase.

#### Ciclo de Vida de un Componente

En aplicaciones con muchos componentes, es muy importante liberar recursos tomados por los componentes cuando se destruyen.

1. **Métodos Especiales**:
   - `componentDidMount()`: Se ejecuta después que la salida del componente ha sido renderizada en el DOM.
   - `componentWillUnmount()`: Se ejecuta cuando el componente se elimina del DOM.

#### Ciclo de Vida de un Componente: Ejemplo

Vamos a crear un ejemplo que haga uso de los métodos de ciclo de vida:

1. **Crear `my-eighth-app`**:
   - En el archivo `App.js` creamos un componente `Clock` que:
     - Tenga un estado `date` con la fecha actual `new Date()` como valor inicial.
     - Tenga un método `tick()` que cambie el estado con la fecha actual `new Date()`.
     - Al montar el componente se inicialice un intervalo cada 1000ms que ejecute la función `tick`.
     - Al desmontar el componente se debe eliminar el intervalo del punto anterior.
     - Debe renderizar un texto que muestre el estado `date`.
     - El componente `App` debe renderizar el componente `Clock`.

#### Ciclo de Vida de un Componente: Componentes Funcionales

Al igual que con el estado en los componentes de clase, los métodos de ciclo de vida también se pueden usar en componentes funcionales gracias a los hooks.

1. **Copiar `my-eighth-app` en `my-eighth-functional-app`**:
   - Convertimos el componente de clase `Clock` en un componente funcional.
   - Usamos `useState` y `useEffect` para conseguir el mismo efecto.

## Composición de componentes

- La composición de componentes es un poderoso patrón para
hacer los componentes más reutilizables.

- En  React,  podemos  hacer  que  los  componentes  sean  más
genéricos  aceptando  props,  que  son  para  los  componentes
React lo que los parámetros son para las funciones.

- Composición  de  componentes  es  el  nombre  para  pasar
componentes  como  props  a  otros  componentes,  creando  así
nuevos componentes con otros componentes.

- Existe una prop especial llamada children muy recomendable
para pasar elementos hijos directamente en su resultado.

```javascript
const Button = (props) => {
  <button onClick={props.onClick}>{props.children}</button>
};
// Otra instancia de código
const Button = (props) => {
  const { onClick, children } = props;
  return <button onClick={onClick}>{children}</button>
};
// Otra instancia de código
const Button = ({ onClick, children }) => (
  button onClick={onClick}>{children}</button>
);
// Otra instancia de código
const App = () => {
    const onClick = () => alert("Hey 👋");
    return <Button onClick={onClick}>Click me!</Button>;
};
```

## Composición de Componentes

- Algunos  componentes  no  conocen  a  sus  hijos  de  antemano,  por ejemplo  componentes  como  Sidebar  o  Dialog  que  representan “cajas” genéricas.
A través de children se pueden pasar elementos hijos directamente a un  componente  para  usarlos  en  su  resultado.  De  esta  manera podremos reutilizar nuestros componentes con diferentes propósitos.
Por ejemplo:
- Vamos a crear una app my-sixth-app
- Dentro de App.js creamos un componente FancyBorder y dos componentes`WelcomeDialog`y `GoodByeDialog` que lo utilice.

- El componente WelcomeDialog debe renderizar el componente `FancyBorder` con un título h1 “Bienvenido!” y un p con el texto
”Explora todos nuestros productos!” como hijos
- Además,  el  componente  GoodByeDialog  debe  renderizar  el
componente `FancyBorder` con un título h1 “Adiós!” y un p con el
texto ”Gracias por visitar nuestra web!” como hijos.
- El  componente  App  deber  renderizar  un  componente
WelcomeDialog y GoodByeDialog

```javascript
// src/App.js
const FancyBorder = (props) => {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
    {props.children}
    </div>
  );
};

const WelcomeDialog = () => {
  return (
    <FancyBorder color="blue">
    <h1 className="Dialog-title">Bienvenido!</h1>
    <p className="Dialog-message"> Explora todos nuestros productos! </p>
    </FancyBorder>
  );
};

const GoodByeDialog = () => {
  return (
    <FancyBorder color="blue">
    <h1 ClassName="Dialog-title">Adiós!</h1>
    <p className="Dialog-message"> Gracias por visitar nuestra web! </p>
    </FancyBorder>
    
  );
};

const App = () => {
  return (
    <>
    <WelcomeDialog />
    <GoodByeDialog />
    </>
  );
};
export default App;
```

### Prop Drilling o Perforación de Props

- En  el  siguiente  ejemplo,  tenemos  3  capas,  la  primera  (App)
envía el userName a la segunda (WelcomePage) que a su vez
envía la misma prop a la siguiente capa (WelcomeMessage).
Por tanto tenemos la siguiente estructura:

## Estructura de Componentes

### Explicación de los Componentes

1. **App**:
   - El componente `App` suele ser el componente raíz de una aplicación React. Sirve como el punto de entrada principal y es responsable de renderizar la estructura general de la aplicación. El componente `App` a menudo incluye otros componentes y gestiona el estado y la lógica que afecta a toda la aplicación.

   >NOTA:El componente App importa y renderiza el componente WelcomePage. Esto configura la estructura principal de la aplicación.

2. **WelcomePage**:
   - El componente `WelcomePage` es probablemente un componente de nivel superior que representa una página o sección específica de la aplicación. Podría ser responsable de mostrar un mensaje de bienvenida o saludo al usuario. Este componente podría incluir elementos de diseño y otros componentes anidados, como `WelcomeMessage`, para crear una experiencia de usuario coherente.

   >NOTA:El componente WelcomePage importa y utiliza el componente WelcomeMessage varias veces, pasando diferentes nombres como props. También incluye un encabezado para proporcionar contexto a los mensajes de bienvenida.

3. **WelcomeMessage**:
   - El componente `WelcomeMessage` es probablemente un componente más pequeño y reutilizable que muestra un mensaje de bienvenida personalizado. Podría aceptar props, como el nombre de un usuario, para personalizar el mensaje. Este componente puede ser utilizado dentro de `WelcomePage` u otras partes de la aplicación para proporcionar un saludo consistente a los usuarios.

   >NOTA:El componente WelcomeMessage acepta una prop name y muestra un mensaje de bienvenida personalizado. Este componente está diseñado para ser reutilizable y puede ser utilizado con diferentes nombres.

### Diagrama de la Estructura de los Componentes

```plaintext
App
└── WelcomePage
    ├── WelcomeMessage (name="Juan")
    ├── WelcomeMessage (name="María")
    └── WelcomeMessage (name="Pedro")
```

### Ejemplo de Código de estructura

```javascript
// App.js
import React from 'react';
import WelcomePage from './WelcomePage';

function App() {
  return (
    <div>
      <WelcomePage />
    </div>
  );
}

export default App;

// WelcomePage.js
import React from 'react';
import WelcomeMessage from './WelcomeMessage';

function WelcomePage() {
  return (
    <div>
      <h1>Bienvenido a Nuestra Aplicación</h1>
      <WelcomeMessage name="Juan" />
      <WelcomeMessage name="María" />
      <WelcomeMessage name="Pedro" />
    </div>
  );
}

export default WelcomePage;

// WelcomeMessage.js
import React from 'react';

function WelcomeMessage({ name }) {
  return <p>Bienvenido, {name}!</p>;
}

export default WelcomeMessage;

// Otro ejemplo de código
const App = () => {
  const userName = "Joe";

  return <WelcomePage userName={userName} />;
};

const WelcomePage userName=({userName}) => {
  return (
    <>
    <WelcomeMessage userName={userName} />
    {/** Some other welcome page code*/}
    </>
  );
};

const WelcomeMessage = ({ userName }) => {
  return <h1>Hey, {userName}!</h1>;
};
/*Con pocas capas esto no es un gran problema, sin embargo, en 
aplicaciones más grandes no es práctico ni eficiente. Gracias a 
la  Composición  de  Componentes  podemos  darle  solución  a 
esta problemática.
Al eliminar una capa tenemos la siguiente estructura:
*/
const App = () => {
  const userName = "Joe";

  return <WelcomePage title={<WelcomeMessage userName={userName} />} />;
};

const WelcomePage userName=({title) => {
  return (
    <>
    {title} 
    {/** Some other welcome page code*/}
    </>
  );
};

const WelcomeMessage = ({ userName }) => {
  return <h1>Hey, {userName}!</h1>;
};

```

## Performance

- El  patrón  de  Composición  de  Componentes  es  muy recomendable  para  reducir  el  número  de  renderizados  en nuestra aplicación.

- Por  poner  un  ejemplo,  si  tenemos  un  componente  Post  que muestra  el  progreso  del  scroll,  React  actualiza  el  componente en base al evento de scroll.

- En  nuestro  ejemplo,  si  el  contenido  del  Post  tiene  muchos componentes,  el  renderizado  cada  vez  que  cambia  el  scroll sería muy costoso.
- Esto  se  podría  solucionar  separando  la  lógica  del  progreso  a otro componente y utilizando la composición de componentes.

```javascript
const Post = () => {
  const [Progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const scrollListener = () => {
      //update the prosgress based on the scroll position
    }
    window.addEventListener('scroll', scrollListener, false);
  }, [])
  return (
    <>
    <h2 className="progress">
    Progress: {progress}%
    </h2>
    <div className="content">
    {/** more content*/}
    </div>
    </>
  )
}

```

- Si refactorizamos nuestro código anterior y separamos la lógica para  pasar  el  contenido  del  Post  como  hijo  (children), conseguimos que no se renderice ya que React renderiza props sólo si han cambiado.
Podéis ver el ejemplo funcional aquí:
[https://codepen.io/fgerschau/pen/QWaRgKg](https://codepen.io/fgerschau/pen/QWaRgKg)

```javascript
const PostLayout =({ children}) => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const scrollListener = () => {
      // update the progress based on the scroll position
    };
    window.addEventListener("scroll", scrollListener, false);
  }, []);
  return (
    <>
    <h2 className="progress">Progress: {progress}%</h2>
    {children}
    </>
  );
};

const Post = () => {
  return (
    <PostLayout>
    <div className="content">
    <h1>Content Title</h1>
    {/** moro content*/}
    </div>
    </PostLayout>
  );
};
```

## Estado

- En nuestra aplicación my-fifth-app estamos almacenando los datos de las personas en un array en una variable, y pasándolos como props. Esto está bien para empezar, pero imagina si queremos ser capaces de eliminar  un  elemento  de  la  matriz.  Con  props,  tenemos  un  flujo  de  datos  unidireccional,  pero  con  state podemos actualizar datos privados desde un componente.
Puedes  pensar  en  el  estado  como  cualquier  dato  que  deba  ser  guardado  y  modificado  sin  ser necesariamente añadido a una base de datos - por ejemplo, añadir y eliminar artículos de un carrito de la compra antes de confirmar la compra.

### Ejemplo

Para  comprobar  el  funcionamiento  de  los  estados  vamos  a añadir funcionalidad a nuestra tabla de la app my-fifth-app de a clase 2 para poder eliminar personas de la tabla. Para ello:

- Copiamos la app my-fifth-app en my-seventh-app

- En  la  clase  App  dentro  del  archivo  App.js  creamos  un objeto  state  para  almacenar  las  personas.  Ahora podemos  pasarle  estos  datos  a  la  tabla  mediante this.state.people
- Creamos  un  nuevo  método  llamado  removePeople  que reciba el índice como argumento, a través de un método filter  debería  eliminar  la  persona  del  índice  recibido  y setearlo al estado usado setState
- Pasamos  las  personas  y  la  función  removePeople  como props
- Añadimos  el  botón  para  eliminar  una  persona  en  el componente TableBody

```javascript
// src/App.js
import React, { Component } from "react";
import Table from "./Table";
class App extends component {
  state = {
    people: [
      {
        name: "John",
        job: "Developer",
      },
      {
        name: "Maya",
        job: "Architect",
      },
    ],
  };
  removePeople = (index) => {
    const { people } = this.state;
    this.setState({
      people: people.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  render() {
    const title = <h1>Nice People</h1>;
    return (
      <div className="container">
      <Table
      peopleData={this.state.people}
      removePeople={this.removePeople}
      title={title}
      />
      </div>
    );
  }
}
export default App;
```

- En  el  componente  Table  recuperamos  la  prop removePeople y la pasamos a TableBody
- Añadimos el botón para eliminar una persona en el  componente  TableBody  usando  la  prop removePeople

```javascript
// scr/Table.js
import React, { Component } from "react";
const tableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};
function TableBody(props) {
  const rows  = props.peopleData.map((row, index)) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <button onClick={() => props.removePeople(index)}>Delete</button>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

class Table extends Component {
  render() {
    const { peopleData, removePeople, title } = this.props;
    return (
      <>
        {title}
        <table>
          <TableHeader />
          <TableBody peopleData={peopleData} removePeople={removePeople} />
        </table>
      </>
    );
  }
}
export default Table;
```

Hasta  ahora  hemos  añadido  la  funcionalidad  para eliminar una persona, sin embargo, es habitual en una aplicación  añadir  registros  dinámicamente,  por  tanto, vamos a añadir un formulario para hacerlo y actualizar nuestro estado.

- Eliminamos  todos  los  datos  hardcodeados  de people. Lo inicializamos como un array vacío.
- Creamos un nuevo componente Form:
- Creamos un estado inicial
- Añadimos  una  función  para  actualizar  el estado  con  el  valor  de  los  campos  del formulario
- Creamos el formulario con un campo name y job y un botón de Submit
- Creamos  una  función  submitForm  que enviará los datos al prop handleSubmit.

```javascript
// src/Form.js
import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };
  state = this.initialState;
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
  render() {
    const { name, job } = this.state;
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor ="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onchange={this.handleChange}
        />
        <input type="button" value="submit" onClick={this.submitForm} />
      </form>
    );
  }
}
export default Form;
```

- Igual que con removePeople, creamos una función handleSubmit para añadir una persona en App.js
- Renderizamos  debajo  de  la  tabla  el  componente Form  con  el  prop  handleSubmit  para  enviarle  la función  que  agrega  la  persona  a  nuestro  estado people.

```javascript
// src/App.js
import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    people: [],
  };

  removePeople = (index) => {
    const { people } = this.state;
    this.setState({
      people: people.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  handleSubmit = (character) => {
    this.setState({ people: [...this.state.people, character] });
  };
  render () {
    const title = <h1>Nice People</h1>;
    return (
      <div className="container">
        <Table
          peopleData={this.state.people}
          removePeople={this.removePeople}
          title={thitle}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default App;
```

## Estado: Componentes funcionales

- Hasta  ahora  hemos  visto  cómo  se  usa  un  estado  en componentes de clase, sin embargo, gracias a los hooks de  estado  añadidos  en  React  16.8,  podemos  y  usar estado y otras características de React sin escribir una clase.
- Copiamos  nuestra  app  my-seventh-app  en my-seventh-functional-app
- Convertimos  nuestra  clase  App  en  una  función App
- Convertimos  las  funciones  removePeople  y handleSubmit en constantes
- Usamos  el  método  useState  para  manipular  el estado  e  inicializamos  con  el  array  de  personas vacío.
- Usamos  la  función  setPeople  para  modificar  el estado de people
- Cambiamos  this.state.people  por  people, this.state.removePeople  por  removePeople, this.title  por  title  y  this.handleSubmit  por handleSubmit.

```javascript
// src/App.js
import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

const App = () => {
  const [people, setPeople] = useState([]);
  const removePeople = (index) => {
    setPeople(people.filter((character, i) => {
      return i !== index;
    }));
  };
  const handleSubmit = (character) => {
    setPeople([...people, character]);
  };
  const title = <h1>Nice People</h1>;
    return (
      <div className="container">
        <Table
          peopleData={people}
          removePeople={removePeople}
          title={thitle}
        />
        <Form handleSubmit={handleSubmit} />
      </div>
    );
};

export default App;
```

## Estado: Usos

Para hacer un uso correcto del estado hay que saber 4 cosas:

1. No se puede modificar el estado directamente, hay que utilizar setState

2. Las  actualizaciones  del  estado  pueden  ser  asíncronas.

- Por ejemplo,  debido  a  que  this.props  y  this.state  pueden actualizarse  de  forma  asincrónica,  no  debes  confiar  en  sus valores  para  calcular  el  siguiente  estado.

- Para solucionarlo hay que utilizar la segunda forma de setState que  acepta  una  función  en  lugar  de  un  objeto.  Esa  función recibirá el estado previo como primer argumento, y las props en el  momento  en  que  se  aplica  la  actualización  como  segundo argumento:

```javascript
//correcto
this.setState({ people: [] });

this.setState((state, props) => ({
  counter: state.counter + props.increment,
}));
```

3.Las  actualizaciones  de  estado  se  fusionan.  Cuando  invocas  a setState(), React combina el objeto que proporcionaste con el estado  actual.

  -Por  ejemplo,  tu  estado  puede  contener  varias  variables independientes (people, posts y comments).

`this.state.comments`,  pero  reemplaza  completamente this.state.posts.

Ocurre  lo  mismo  con  la  función handleComments,  únicamente  reemplaza
this.state.comments.

4.Los datos fluyen hacia abajo. Ni los componentes padres o hijos pueden saber si un determinado componente tiene o no tiene estado y no les debería importar si se define como una función o una clase.

  -Por eso es que el estado a menudo se le denomina local  o  encapsulado.  No  es  accesible  desde  otro  componente excepto de aquel que lo posee y lo asigna.

```javascript
state = {
  poeple: [],
  posts: [],
  comments: [],
};
handlePosts = () => {
  this.setState({
    posts: [{ id: 1, name: "post 1"}],
  });
};
handleComments = () => {
  this.setState({
    comments: [{ id: , body: "Comment 1"}],
  });
};
```

## Ciclo de vida de un componente

1.En aplicaciones con muchos componentes, es muy importante liberar recursos tomados por los componentes cuando se detruyen.

  -Podemos declarar métodos especiales en la clase del componente para ejecutar algún código cuando un componente se monta (componentDidMount()) "Se ejecuta después que la salida del componente ha sido renderizada en el DOM" y desmonta (componentWillUnmount()) "Se ejecuta cuando el componente se elimina en el DOM".

### Ejercicio ciclo de vida de un componente

 Creamos una app my-eighth-app

- En el archivo App.js creamos un componente Clock que:
- Tenga  un  estado  date  con  la  fecha  actual  “new Date();” como valor inicial
- Tenga un método tick() que cambie el estado con la fecha actual “new Date;”

- Al  montar  el  componente  se  inicialice  un  intervalo cada 1000ms que ejecute la función tick

- Al  desmontar  el  componente  se  debe  eliminar  el intervalo del punto anterior
- Debe renderizar un texto que muestre el estado date.

- El componente App debe renderizar el componente Clock

```javascript
// src/App.js
import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount()  {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
const App = () => {
  return <Clock />;
};
export default App;
```

## Ciclo de vida de un componente: Componentes funcionales

Al  igual  que  con  el  estado  en  los  componentes  de  clase,  los métodos  de  ciclo  de  vida  también  se  puedan  usar  en componentes funcionales gracias a los hooks.
Existe  un  hook  llamado  useEffect  que  equivale  a componentDidMount,  componentDidUpdate  y componentWillUnmount combinados. Veámoslo con un ejemplo:

- Copiamos  nuestra  app  my-eighth-app  en my-eighth-functional-app
- Convertimos  el  componente  de  clase  Clock  en  un
componente funcional
- Usamos useState y useEffect para conseguir el mismo efecto

```javascript
// src/App.js
import React, { useState, useEffect } from "react";

class Clock = () => {
  const [date, setDate] useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

const App = () => {
  return <Clock />;
};
export default App;
```

### Ejercicios

1. **Replicar el Código de Clase**:
   - `my-sixth-app` con el código de la sección Composición de Componentes.
   - `my-prop-drilling-app` con el ejemplo para evitar Prop Drilling.
   - `my-seventh-app` con la app con gestión de estado.
   - `my-seventh-functional-app` con gestión de estado en componentes funcionales.
   - `my-eighth-app` con el temporizador usando métodos del ciclo de vida.
   - `my-eighth-functional-app` usando métodos del ciclo de vida en componentes funcionales.

2. **Leer la Teoría de Composición vs Herencia**.

## Clase 4

### Eventos

Algunas de las diferencias de sintaxis son:

- Los eventos de React se nombran usando camelCase, en vez
de minúsculas. onclick => onClick
- Con JSX pasas una función como el manejador del evento en
vez de un string. “activateLasers()” => {activateLasers}
- En  React,  generalmente  no  necesitas  llamar  a
addEventListener  para  agregar  un  manejador  del  evento  del
DOM,  en  cambio,  debes  proveer  un  manejador  de  eventos
cuando el elemento se renderiza.
- En  React  no  se  puede  retornar  False  para  prevenir  el
comportamiento por defecto, se debe llamar explícitamente a
preventDefault.  Por  ejemplo  en  un  HTML  sin  React,  para
prevenir  el  comportamiento  por  defecto  de  enviar  un
formulario, puedes hacer así:

```javascript
<form onsubmit="console.log('You clicked submit.'); return false">
<button type="submit">Submit</button>
</form>

// Sin embargo con React tienes que hacerlo así =>

<button onclick="activateLasers()">
  Activate Lasers
  </button>
/*----------------*/
<button onClick={activateLasers}>
  Activate Lasers
  </button>
/*----------------------------------*/
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
    </form>
  );
}
```

#### Al  usar  componentes  de  clase  

Un  patrón  muy  común  es  que  los manejadores de eventos sean un método de la clase.
Los métodos de clase no están ligados por defecto a la clase, hay que hacerlo en el constructor a través del método bind(). Si no se liga y se pasa el método this.handleClick como manejador en un evento, this será undefined cuando se llame al método.
Este funcionamiento no es específico de React, es como operan las funciones Javascript.

- Existen 2 maneras de evitar el uso de bind():

  1.Declarando  un  campo  público  de  clase:

  campoPublico = () => {}

2.Si  el  manejador  es  una  función  normal,  se  debe  llamar  en  el evento a una función flecha que llame () al manejador:

// Este método no es recomendable.
// Este método no es recomendable porque crea una nueva función en cada render, lo que puede afectar el rendimiento.
Este método no es recomendable.

### Eventos: métodos usados

En  muchas  ocasiones  es  necesario  pasar  argumentos  a  los manejadores de eventos, argumentos como el id de un usuario o una fila, cualquier dato que sea requerido por el manejador.

**Método 1**: llamar al manejador dentro de una función de flecha.

Si además queremos recibir el evento, añadimos el argumento “e” a la función flecha y la enviamos a nuestro manejador.
Ejemplo:

```javascript
class EventExample extends React.Component {
  deleteRow = (id, e) =>{
    console.log(e, id);
  };
  render() {
    const id = 10;
    return (
      <button onClick={(e) => this.deleteRow(id, e)}>
        Eliminar con función flecha
      </button>
    );
  }
}
```

**Método 2**: haciendo el bind en la creación del prop. Es necesario pasarle  el  objeto  “this”  y  luego  los  argumentos  necesarios.  
En este  método  el  evento  “e”  se  pasa  siempre  como  último
argumento de nuestra función.

```javascript
class EventExample extends React.Component {
  deleteRow = (id, e) =>{
    console.log(e, id);
  };
  render() {
    const id = 10;
    return (
      <button onClick={this.deleteRow.bind(this, id)}>
        Eleminar con bind
      </button>
    );
  }
}
```

### Renderizado condicional

En React, puedes crear distintos componentes que encapsulan el comportamiento  que  necesitas.  
Entonces,  puedes  renderizar solamente  algunos  de  ellos,  dependiendo  del  estado  de  tu aplicación.
El renderizado condicional funciona de la misma manera que lo hacen las condiciones en Javascript.
Podéis usar if, el operador
condicional  **ternario:  condition  ?  exprIfTrue  :  exprIfFalse** o  el
operador **&&**.

Imaginemos que queremos crear un componente **Greeting** que
reciba una propiedad **isLoggedIn** para indicarnos si el usuario ha iniciado sesión o no.
  -Si lo ha hecho (isLoggedIn=true), queremos
devolver  el  saludo  “Bienvenido  de  nuevo!”,  
  -En  otro  caso,
queremos mostrar el mensaje: “Por favor, haz login!”.

Ejemplo:

- Creamos una app **my-tenth-app**
- Creamos un componente UserGreeting con el saludo
- Creamos un componente SignUp con el segundo mensaje
- Creamos el componente Greeting que según el valor del prop isLoggedIn muestre un componente u otro
- Renderizamos  el  componente  Greeting  dentro  del componente App y jugamos con el prop isLoggedIn

### Renderizado condicional: if

Sobre la misma aplicación my-tenth-app, realizar las siguientes
acciones:

- Creamos  un  componente  LoginButton  que  reciba  como prop onClick y devuelva un botón que ponga Login
- Creamos un componente LogoutButton que reciba como prop onClick y devuelva un botón que ponga Logout
- Creamos  un  componente  LoginControl  con  una  variable de estado isLoggedIn inicializada a false
- En  el  componente  LoginControl  añadimos  el  método handleLoginClick que cambie el estado isLoggedIn a true
- En  el  componente  LoginControl  añadimos  el  método handleLogoutClick  que  cambie  el  estado  isLoggedIn  a false
- En  el  método  render  de  LoginControl,  renderizamos  el componente  Greeting  y  le  pasamos  como  prop isLoggedIn la variable de estado isLoggedIn
- Debajo del componente Greeting renderizaremos el botón LoginButton si lavariable de estado isLoggedIn es false, en otro caso, mostramos el botón LogoutButton
- En  el  componente  App  eliminamos  el  componente Greeting y mostramos el componente LoginControl

- El componente LoginControl tiene las siguientes características:

- Tiene  un  método  constructor  donde  bindea  los
manejadores  de  los  botones  para  poder  asignarlos  a  los eventos onClick de los botones
- El state es inicializado en el constructor
- Los manejadores cambian el estado con setState
- En la función render asigno en la variable button el botón correspondiente según la condición isLoggedIn
- Los  componentes  Greeting,  LoginButton  y  LogoutButton han  sido  creados  en  archivos  independientes  e importados en este archivo.

```javascript
import React from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class LoginControl extends React.Component {
  cosntructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutclick.bind(this);
    this.state = { isLoggedIn: false};
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
      </div>
    );
  }
}
export default LoginControl;

```

### Renderizado condicional:  &&

En React podemos utilizar el operador ternario condition ? expr1 : expr2 para hacer un renderizado condicional.
Este  operador  lo  podemos  usar  también  para  renderizar  componentes.  En  nuestro  ejemplo  de  LoginControl,  el renderizado de los botones también podría realizarse así:

```javascript
return <div>{count > 0 && <h1>Messages: {count}</h1>} </div>;
function App() {
  const unreadMessages = [];
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length >0 &&
        <h2>
        You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  )
}
function App() {
  const count =0;
  return <div>{count && <h1>Message: {count}</h1>} </div>;
}
```

### Renderizado condicional:  ternario

Es  posible  que  en  alguna  de  nuestras  aplicaciones  necesitemos  que según  un  valor,  ya  sea  de  props  o  de  state,  un  componente  no  se muestre. La manera de hacerlo es retornando un null.

- En  nuestra  app  my-tenth-app  creamos  un  nuevo  componente Warning  que  espere  recibir  una  prop  warn,  si  no  la  recibe  no tiene que mostrarse, pero si recibe la prop debe renderizar un div con clase “warning” y el texto “Warning!!”
- Añadir un estilo en App.css para “warning” con color: orange;
- Importar  el  componente  Warning  en  el  componente LoginControl.  En  el  renderizado  del  componente  añadir  el componente Warning con el valor de prop warn={!isLoggedIn}
- Comprobar lo que ocurre

### Renderizado condicional:  No renderizar

Es posible que en algunos de nuestras aplicaciones necesitemos que según un valor, ya de props o de state, un componente no se muestre. La manera de hacerlo es retornando un null.

- En  nuestra  app  my-tenth-app  creamos  un  nuevo  componente **Warning**  que  espere  recibir  una  prop  warn,  si  no  la  recibe  no 
tiene que mostrarse, pero si recibe la prop debe renderizar un div con clase “warning” y el texto “Warning!!”
- Añadir un estilo en App.css para “warning” con color: orange;
- Importar  el  componente  Warning  en  el  componente **LoginControl**.  
- En  el  renderizado  del  componente  añadir  el componente Warning con el valor de prop warn={!isLoggedIn}
- Comprobar lo que ocurre

```bash
my-tenth-app/
├── node_modules/ # Dependencias del proyecto
├── public/ # Archivos públicos como index.html
├── src/ # Contiene el código fuente de la aplicación
│   ├── components/ # Carpeta para todos los componentes de React
│   │   ├── Greeting.js # Componente con mensaje según estado de inicio sesión
│   │   ├── LoginButton.js # login
│   │   ├── LoginControl.js # maneja el estado de inicio de sesión y renderiza Greeting
│   │   ├── LogoutButton.js # LoginControl.js TB renderiza Login/LogoutButton según el estado.
│   │   ├── SignUp.js # Muestra mensaje de registro
│   │   ├── UserGreeting.js # Muestra mensaje de bienvenida
│   │   ├── Warning.js # Muestra mensaje de advertencia si recibe la prop Warn
│   ├── App.js # COMPONENTE PRINC. RENDERIZA LoginControl
│   ├── App.css # Archivo de estilos para la aplicación
│   ├── index.js # Punto de entrada de la aplicación
│   ├── index.css # Archivo de estilos globales
├── package.json # Archivo de configuración del proyecto
├── package-lock.json # Archivo de bloqueo de dependencias
└── README.md # Archivo de documentación del proyecto
```

## Clase 5: Introducción a React Router

### Implementaciones Realizadas en Clase 7

1. **Configuración de React Router**:
   - Instalación de `react-router-dom`.
   - Configuración básica de rutas utilizando `BrowserRouter`, `Routes` y `Route`.

2. **Creación de Componentes de Ruta**:
   - Creación de componentes como `Home`, `About` y `Contact`.
   - Uso de `Link` para la navegación entre rutas.

### Objetivo

El propósito de esta clase fue aprender a configurar y utilizar React Router para manejar la navegación en una aplicación de React.

### Buenas Prácticas

- Utilizar `BrowserRouter` para envolver la aplicación y habilitar la navegación basada en rutas.
- Utilizar `Link` en lugar de etiquetas `<a>` para evitar recargas completas de la página.

### Listas y keys

En  nuestro  ejercicio  de  tablas  hemos  renderizado  los  registros  de personas.  La  manera  más  común  de  hacerlo  es  a  través  del  método map de un array, que recorre la lista y lo convertimos en un elemento JSX a renderizar.
El  método  map  devuelve  un  nuevo  array  de  elementos  JSX  que podemos renderizar como una variable más **(listStudents)**
Si  nos  fijamos  en  el  primer  ejemplo,  nos  marca  el  componente  **li** informando que se requiere la definición de una **key**.

```javascript
function App() {
  const students = [ 'Joe', 'María', 'Michel'];
  const ListStudents = students.map((student) => {
    return <li>{student}</li>
  });
  return (
    <div className="App">
    {lisStudents}
    </div>
  );
}
```

Las  keys  en  un  array  ayudan  a  React  a  identificar  qué  items  han cambiado, han sido agregados o eliminados. Las keys deben ser dadas a  los  elementos  dentro  del  array  para  darle  a  los  elementos  una identidad estable.

```javascript
function App() {
  const students = [ 'Joe', 'María', 'Michel'];
  const ListStudents = students.map((student, index) => {
    return <li key={index}>{student}</li>
  });
  return (
    <div className="App">
    {lisStudents}
    </div>
  );
}
```

### Listas y keys: KEYS

- Una key es un string que identifica únicamente a un elemento de la lista entre sus hermanos. Habitualmente se usan los IDs de los registros.

- Si no tenemos IDs estables para cada registro, como última instancia se puede utilizar como key el índice de los elementos del array.

- La práctica recomendada es utilizar campos únicos entre los registros, por ejemplo: ID, DNI, CIF, etc. Datos que no se puedan repetir en la lista.

```javascript
function App() {
  const students = [
    {
      dni: '11111111A',
      name: 'Joe',
      date_of_birth: '1987-01-01'
    },
    {
      dni: '22222222B',
      name: 'María',
      date_of_birth: '1989-01-2'
    }
  ];
  const listStudents = students.map((student, index) => {
    return <li key={student.dni}>{student.name}</li>
  });
  return (
    <div className="App">
    {lisStudents}
    </div>
  );
}
```

- Las keys sólo tienen sentido en el contexto del array que las envuelve.

- Si refactorizamos  y  extraemos  el componente  ListItem,  la  key  no  tiene sentido que se declare en el componente ListItem.

- La key tiene que definirse dentro del map, asignarlo al elemento ListItem.
Otra característica a tener en cuenta es que la key no se pasa como prop, si necesitamos ese dato dentro del componente hay que pasar lo expresamente en otra prop. Por ejemplo:

```javascript
const listStudents = students.map((student, index) => {
  return (
    <ListItem key={student.dni} dni={student.dni} value={student.name} />
  ):
});
return <div className="App">{listStudents}</div>;

/********************************/

function App() {
  const students = [
    {
      dni: '11111111A',
      name: 'Joe',
      date_of_birth: '1987-01-01'
    },
    {
      dni: '22222222B',
      name: 'María',
      date_of_birth: '1989-01-2'
    }
  ];
  const listStudents = students.map((student, index) => {
    return <li key={student.dni}>{student.name}</li>
  });
  return (
    <div className="App">
    {lisStudents}
    </div>
  );
}
```

### Formularios:  Componentes controlados

>NOTA:Los  elementos  de  formularios  en  HTML  conservan  naturalmente  algún estado  interno,  su  funcionamiento  es  un  poco  diferente  a  otros elementos del DOM en React.
Un  formulario  por  defecto  navega  a  otra  página  cuando  el  usuario envía  el  formulario  a  través  del  botón  Submit.  Sin  embargo,  en  la mayoría  de  casos,  es  conveniente  tener  una  función  Javascript  que tenga acceso a los datos que el usuario introdujo en el formulario y se encargue  del  envío  del  formulario.  

- **La  forma  predeterminada  para conseguir esto es una técnica llamada “componentes controlados”**: es aquel cuyo valor es controlado por React, de manera que el estado de **React es la “única fuente de la verdad”**.

- De esta  manera  los  componentes  React  que  rendericen  un  formulario también controlan lo que pasa en ese formulario con las subsecuentes entradas del usuario.

- En el ejemplo vemos un input que recibe como **atributo value** el **campo value** del estado del componente, y, a su vez, mediante el **manejador handleChange** actualizamos el estado con lo introducido por el usuario, de esta manera el valor del input siempre está dirigido por el estado de React.

```javascript
class App extends React.Component {
  cosntructor(props) {
    super(props);
    this.state = { value: ""};
    this.hadleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
      <input type="submit" value="Submit" />
    </form>
    );
  }
}
```

### Formularios:Componentes controlados

Al especificar la **prop value** en un componente controlado se evita que el usuario cambie la entrada a menos que así lo quiera.

- **Si se ha especificado value pero el input aún es editable, es porque el valor de la prop value es undefined o null**.

Es por este **motivo que en un componente controlado es necesario construir un manejador o controlador de eventos** para cada elemento que actualice el estado del componente y lo asigne al valor del componente controlado.

```javascript
return (
  <form onSubmit={this.handleSubmit}>
    <label>
      No editable:
      <input type="text" value="hi" />
    </label>
    <label>
      Editable:
      <input type="text" value={null} />
    </label>
    <input type="submit" value="Submit" />
  </form>

);
```

### textarea define su texto por sus hijos

```javascript
<textarea>
  Hello there, this is some text in a text area.
</textarea>
```

### Select define su lista desplegable con sus hijos y se selecciona una opción de la lista a través del atributo **selected** del tag option

```javascript
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

- En ambos casos **React** utiliza el atributo **value** para asignar su valor , el texto en el caso de textarea y la opción seleccionada en el caso del select. 
- Elo objeto **event** que devuelve el evento **onChange** obtiene sus valores con el campo **value(event.target.value)**

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textArea: "Hello there, this is some text in a text area",
      select: "coconut",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    alert("textarea submitted: " + this.state.textArea);
    alert(select submitted: " + this.state.select);
    event.preventDefault();
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Text area:
            <textarea
              value={this.state.textArea}
              name="textArea"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Pick your favorite flavor:
            <select value={this.state.select} name="select"
              onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
    );
  }
}
```

### Ejercicio clase 5

- Replicar el código de clase:
  App my-eleventh-app

```bash
my-eleventh-app/
├── node_modules/ # dependencias del proyecto
├── public/ # archivos públicos 
│   ├── index.html 
│   ├── favicon.ico
│   └── manifest.json
├── src/ # código fuente de la aplicación
│   ├── components/ # componentes reutilizables
│   │   ├── ListItem.js # componente para representar un elemento de la lista de estudiantes.
│   ├── App.js # componente principal de la aplicación
│   ├── App.css # archivo de estilos para la aplicación
│   ├── index.js # punto de entrada de la aplicación
│   ├── index.css # archivo de estilos globales
├── .gitignore # especifica archivos y directorios ignorados por Git
├── package.json # archivo de configuración del proyecto
├── package-lock.json # archivo de bloqueo de dependencias
└── README.md # Documentación del proyecto.
```

## Clase 6: Rutas Anidadas y Parámetros de Ruta

### Implementaciones Realizadas

1. **Rutas Anidadas**:
   - Configuración de rutas anidadas utilizando `Outlet`.
   - Creación de un componente `PublicLayout` para manejar la estructura de la aplicación.

2. **Parámetros de Ruta**:
   - Uso de parámetros de ruta dinámicos con `useParams`.
   - Creación de componentes que utilizan parámetros de ruta para mostrar contenido dinámico.

### Propósito

El propósito de esta clase fue aprender a manejar rutas anidadas y parámetros de ruta en React Router.

### Mejoras Prácticas

- Utilizar `Outlet` para renderizar componentes hijos en rutas anidadas.
- Utilizar `useParams` para acceder a los parámetros de ruta y mostrar contenido dinámico.

### Qué es React Router?

- Es una librería muy utilizada con **React** ya que facilita el proceso de definir las rutas de navegación dentro de nuestra aplicación.
- Disponible tanto para web como para móvil con **React Native**.
- **Su cometido principal es ofrecer un enrutamiento dinámico gracias a los componentes** "ofrece rutas que renderizan un componente".
- **browserRouter** router para navegador web.
- **Otros Routers**:
[MemoryRouter, NativeRouter, StaticRouter](https://reactrouter.com/en/main/routers/picking-a-router)

```bash
# instalación:
npm install --save react-router-dom
```

### Configuración

### Creamos una aplicación my-twelfth-app

- En App.js importamos el **RouterProvider** y el método para crear nuestro router para web, **createBrowserRouter**
- Creamos el router la ruta principal que renderice un JSX
- Renderizamos el **RouterProvider** con nuestro router como prop

```javascript
import React from "react";
import {
  createBrowserRouter,
  RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}
export default App;
```

### Definiendo rutas

- Como hemos visto ya como renderizar un componente si accedemos a la ruta raíz "/", **una aplicación real consta de varias rutas** que muestran diferentes componentes según la interacción del usuario.
- Crear nuestro router llamando a la función **createBrowserRouter** con:

### Opción 1: Un array de rutas como argumento, como en nuestro primer ejemplo

```javascript
// src/router.js
import {
  createBrowserRouter } from "react-router-dom";
// Opción 1
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
export default router;
```

### Opción 2: Componentes Route en una estructura JSX usando el método createRouteFromElements

```javascript
// src/router.js
import {
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
   } from "react-router-dom";
// Opción 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    path="/"
    element={<div>Hello world!</div>}
    />
  )
);
export default router;
```

### Estructura de rutas

**La definición de una ruta consta de los siguientes atributos**:

- **path**:  texto  con  la  ruta  en  la  que  se  renderizará  este componente, por ejemplo: “/”, “users”, “students”, etc.
- **element**: el componente a renderizar
- **errorElement**: componente que se renderizará en caso de error.
- **loader**:  función  a  ejecutar  para  cargar  los  datos  antes  de renderizar el componente.
- **action**: función a ejecutar en acciones de formulario.
- **index**:  booleano  que  indica  que  este  componente  es  el componente inicial.
  - Muy utilizado en rutas hijas para indicar el elemento hijo que se mostrará al acceder al padre.
  - Se trata de una  **ruta  especial  (index  route)  que  no  requiere  el  atributo path**.
- **children**: array de rutas que se denominan rutas hijas.
  - El path de los hijos se concatena con el path del padre.
  - Si un hijo no tiene  configurado  un  **errorElement**  se  usará  el  elemento  de error  del  padre.

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootaction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <Editcontact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);
```

### Rutas: Layout

- Todas  las  páginas  web  tienen  un  esquema  o  composición  de elementos  (Layout),  es  decir,  tienen  un  header,  sidebar,  footer,  etc. ubicados en posiciones concretas según el propósito de la misma.
- En  nuestro  caso  vamos  a  crear  una  estructura  inicial  sobre  la  que pintar todos nuestros componentes.

### Sobre nuestra aplicación my-twelfth-app

- Reemplazamos el archivo index.css por el que se encuentra en los materiales de clase 5 dentro del ejercicio my-eleventh-app.
- En src creamos una carpeta routes para almacenar nuestros componentes.
- Dentro de **src/routes** creamos un componente **PublicLayout**.
- En src creamos un archivo **router.js** para almacenar todas las 
rutas de nuestra aplicación.

```javascript
// src/routes/publicLayout.js
export default function PublicLayout() {
  return (
    <>
      <div id="sidebaar">
        <h1>React Router Veridas</h1>
        <nav>
          <ul>
            <li>
              <a href={`/clock`}>Clock</a>
            </li>
            <li>
              <a href={`/people`}>People</a>
            </li>
          </ul>
        </nav>
        <div id="detail">[AQUI SE DEBEN RENDERIZAR LOS HIJOS]</div>
      </>
  );
}
```

- En el archivo router.js importamos el componente PublicLayout y lo asignamos como elemento de la ruta “/”.
- En  App.js  importamos  RouterProvider  y  nuestro  router  y lo renderizamos.

```javascript
import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
```

Si observamos el Layout, tenemos un listado con 2 rutas, una para mostrar el reloj y otra para mostrar un listado de personas. Por tanto, debemos crear las rutas para cada uno de ellos, como hijos de la ruta principal “/”.

### Sobre nuestra aplicación my-twelfth-app continuar

- Copiamos el **componente Clock** del ejercicio **my-eighth-functional** dentro de **src/routes**.
- Copiamos los **componentes Table, Form y App** del ejercicio **my-seventh-app** dentro de **src/routes**.
  - Al componente App lo renombramos como **TableUsers** (tanto el archivo como el nombre de la clase).
- Dentro de nuestro archivo router.js creamos las rutas hijas para clock y people importando los componentes correspondientes.

Si ahora clicamos sobre los links vemos que no se muestran los componentes. En un componente padre, se indica el lugar de renderizado de los hijos mediante el componente `<Outlet />`.

```javascript
// src/router.js
import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./routes/publicLayout";
import Clock from "./routes/TableUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "clock",
        element: <Clock />,
      },
      {
        path: "people",
        element: <Tableusers />,
      },
    ],
  },
]);
export default router;
```

- En nuestro PublicLayout cambiamos el texto [AQUI SE DEBEN RENDERIZAR LOS HIJOS] por `<Outlet />`.

```javascript
// src/routes/publicLayout.js
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <div id="sidebar">
      </div>
      <div id="detail"><Outlet /></div>
    </>
  );
}
```

### Rutas: Client Side Routing

>NOTA:En  este  momento,  si  clicamos  sobre  cualquiera  de  las  opciones  el navegador  se  está  recargando  completamente,  ya  que  está haciendo  una  solicitud  del  documento  al  servidor,  es  el comportamiento por defecto.

- **Client  side  routing**  permite  que  nuestra  app  actualice  la  URL  sin solicitar  otro  documento  al  servidor,  en  su  lugar,  la  aplicación renderizará inmediatamente la nueva UI.
- Esto lo podemos conseguir con el componente **Link** de react-router-dom en lugar del tag **a**.

### Sobre nuestra aplicación my-twelfth-app continuamos

- En nuestro componente **PublicLayout** cambiamos los links de html por el componente **Link**.
- En  nuestro  componente  **Clock**,  añadimos  como  segundo argumento de **useEffect**, un array vacío, []

```javascript
// src/routes/publicLayout.js
import { Outlet, Link } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <div id="sidebaar">
        <h1>React Router Veridas</h1>
        <nav>
          <ul>
            <li>
              <Link href={`/clock`}>Clock</Link>
            </li>
            <li>
              <Link href={`/people`}>People</Link>
            </li>
          </ul>
        </nav>
        <div id="detail">
          <Outlet />
        </div>
      </>
  );
}
```

```javascript
useEffect(() => {
  const timerID = setInterval(() => tick(), 1000);
  return function cleanup() {
      clearInterval(timerID);
  };
}, []);
```

>NOTA: Ahora  observamos  que  la  URL  cambia  pero  no  se  carga  toda  la página  del  navegador.  Además,  con  el  segundo  argumento  de **useEffect**, conseguimos que la función sólo se ejecute una vez.

```bash
my-twelfth-app/
.
├── build
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── static
│       ├── css
│       ├── js
│       └── media
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── components
    │   ├── Clock.js
    │   ├── Form.js
    │   ├── ListItem.js
    │   ├── Table.js
    │   └── TableUsers.js
    ├── index.css
    ├── index.js
    ├── router.js
    └── routes
        ├── Clock.js
        ├── Form.js
        ├── PublicLayout.js
        ├── Table.js
        └── TableUsers.js

10 directories, 31 files
```

## Clase 7: React Router II - Loaders, Actions y Manejo de Errores

### Implementaciones Realizadas en los anteriores ejercicios

1. **Loaders**:
   - Creación de funciones `loader` para obtener datos de una API.
   - Uso del hook `useLoaderData` para acceder a los datos obtenidos por el `loader`.

2. **Actions**:
   - Creación de funciones `action` para manejar datos de formularios.
   - Uso del hook `useActionData` para acceder a los datos devueltos por la `action`.

3. **Manejo de Errores**:
   - Configuración de `errorElement` para manejar errores en rutas.
   - Provocación de errores intencionales en `loader` para probar el manejo de errores.

### Propósito al implementar

El propósito de esta clase fue aprender a manejar datos de forma eficiente utilizando `loaders` y `actions`, así como implementar un manejo adecuado de errores en React Router.

### Mejoras Prácticas con las implementaciones

- Utilizar `loader` para obtener datos antes de renderizar un componente.
- Utilizar `action` para manejar datos de formularios y realizar operaciones como POST.
- Configurar `errorElement` para proporcionar una experiencia de usuario coherente en caso de errores.

### Rutas: Loaders

- Con  React  Router,  podemos  definir  una  función  en  la  propiedad loader de la ruta que es la que se encargará de obtener los datos y devolverlos.  
- A  continuación,  dentro  del  componente  renderizado (asignado  a  la  propiedad  element)  accedemos  a  los  datos  con  el **hook useLoaderData**.

>Nota: Este hook sólo funciona en componentes funcionales.

### Sobre nuestra aplicación my-twelfth-app Router II

- En  el  archivo  TableUsers.js  vamos  a  exportar  una  función loader que se encargará de traer los datos de una api de test.

```javascript
// src/TableUsers.js
export async function loader() {
  const url = "https://dummyjson.com/users";
  let usersapi = await fetch(url);
  usersApi = await usersApi.json();
  const users = usersApi.users.map((user) => {
    return {
      name: user.firstName,
      job: user.company.title };
  });
}
```

- En el componente TableUsers obtenemos los datos obtenidos por  la  función  anterior  usando  el  **hook useLoaderData**  y  los almacenamos  en  la  variable  **users**.  
- En  la  inicialización  del estado le pasamos los datos de **users**.
- Comprobamos  que  el  funcionamiento  sigue  siendo  el  mismo:

```javascript
// src/components/TableUsers.js
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Table from "./Table";
import Form from "./Form";

cosnt TableUsers = () => {
  const users = useLoaderData();
  const [people, setPeople] = useState(users);
 }
 ```

### Rutas: Actions

- Los formularios HTML provocan navegación (cambios en la URL) igual que  ocurría  con  los  tags  “a”  que  hemos  sustituido  por  **“Link”  para hacer el renderizado en cliente**.
- La única diferencia entre ellos es que además  los  formularios  también  pueden  cambiar  el  método  de  la solicitud (GET, POST, PUT, etc).
- Sin  enrutamiento  del  lado  del  cliente,  el  navegador  serializará  los datos del formulario automáticamente y los enviará al servidor como el  **cuerpo  de  la  solicitud  para  POST**,  y  como  **URLSearchParams  para GET**.
- **React Router** hace lo mismo, excepto que en lugar de enviar la solicitud  al  servidor,  **utiliza  el  enrutamiento  del  lado  del  cliente  y  la envía a una ación de ruta**.

### Sobre nuestra aplicación my-twelfth-app Router II en Form.js

- - En el archivo src/routes/Form.js renombramos nuestra clase a **UserForm**
- En  el  componente  UserForm  eliminamos  la  línea **this.props.handleSubmit(this.state)** de la función **submitForm**.
- Cambiamos  el  tag  **form**  por  el  componente  **Form**  de  react
router y asignamos el evento **onSubmit** a **this.submitForm**.
- Eliminamos el evento **onClick** del botón submit y cambiamos a **type=”submit”**.

```javascript


// src/routes/Form.js
import React, { Component } from "react";
import { Form } from "react-router-dom";

class UserForm extends Component {
  initialState = {  
  };
  state = this.initialState;
  handleChange = (event) => {
  };
  submitForm = () => {
    // this.props.handleSubmit(this.state);/
    this.setState(this.initialState);
  };
  render() {
    const { name, job } = this.state;
    return (
      <Form method="post" id="user-form" onSubmit={this.submitForm}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job: </label>
        <input
          type="text"
          onChange={this.handleChange}
        />
        {/* <input type="button" value="Submit"
                    onClick={this.submitForm} /> */}
        <input type="submit" value="Submit"/>
      </Form>
    );
  }
}
export default UserForm;
```

- En  este  punto  podemos  observar  que  nuestro  navegador  no  se recarga al clicar en el botón Submit.

### Sobre nuestra aplicación my-twelfth-app II Actions

- En  el  archivo  **src/routes/TableUsers.js**  añadimos  otra  función que se va a encargar de gestionar los datos del formulario, la llamamos **action** pero podría llamarse de otra manera.
- En  la  función  anterior  añadimos  como  argumento destructurado  **“request”**  desde  el  que  podremos  obtener  los datos del formulario.
- Añadimos una llamada al [API fake](https://dummyjson.com/docs/users) para añadir un usuario.
- Finalmente devolvemos el usuario creado como respuesta de la función.
- En  nuestro  archivo  **src/router.js**  importamos  la  función **action** de **TableUsers** y la añadimos como atributo action de la ruta “people”.

```javascript
// src/routes/TableUsers.js
export async function action({ request }) {
  const formData = await request.formData();
  const fields = Object.fromEntries(formData);
  let user = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: fields.name,
      lastName: "Test",
      age: 250,
      company: {
        title: fields.job,
      },
    }),
  });
  user = await user.json();
  return user;
}
```

```javascript
// src/router.js
import TableUsers, {
  loader as usersLoader,
  action as usersAction,
} from "./routes/TableUsers";

/***********************/
{
  path: "people",
  element: <TableUsers />,
  loader: usersLoader,
  action usersAction,
},
```

Ahora podemos dar de alta el usuario, no obstante, debido a que es una API fake, la creación esficticia y no podemos ver que los datos se actualizan.

- Para  ello  podemos  hacer  otra  cosa,  vamos  a  obtener  los  datos devueltos por la función **action** (usando el hook **useActionData**) y lo añadimos al principio de la tabla.

### Sobre nuestra aplicación my-twelfth-app II actions

- - En  el  archivo  **src/routes/TableUsers.js**  importamos  el  hook **useActionData** y **useEffect**.
- En  el  componente  **TableUser**  declaramos  una  constante **userAdded** con el valor de **useActionData**.
- El  el  hook  **useEffect**  hago  una  comprobación  de  la  variable **userAdded** para añadirla a nuestra tabla.
- Para  una  mejor  visualización  en  el renderizado,  he  movido  el formulario arriba de la tabla.
- Modificamos la variable **title** para que muestre el número de personas.

```javascript
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from '../components/Table';
import UserForm from '../components/Form';

// Función loader para obtener datos de la API
export async function loader() {
  const url = "https://dummyjson.com/users";
  let usersApi = await fetch(url);
  usersApi = await usersApi.json();
  const users = usersApi.users.map((user) => {
    return {
      name: user.firstName,
      job: user.company.title
    };
  });
  return users;
}

// Función action para gestionar los datos del formulario
export async function action({ request }) {
  const formData = await request.formData();
  const fields = Object.fromEntries(formData);
  let user = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: fields.name,
      lastName: "Test",
      age: 250,
      company: {
        title: fields.job,
      },
    }),
  });
  user = await user.json();
  return user;
}

const TableUsers = () => {
  const users = useLoaderData();
  const userAdded = useActionData();
  const [people, setPeople] = useState(users);

  useEffect(() => {
    if (userAdded) {
      const newUser = {
        id: userAdded.id,
        name: userAdded.firstName,
        job: userAdded.company.title,
      };
      setPeople((p) => [newUser, ...p]);
    }
  }, [userAdded]);

  const removePeople = (index) => {
    setPeople(people.filter((person, i) => i !== index));
  };

  const handleSubmit = (person) => {
    setPeople([...people, person]);
  };
  const title = <h1>Nice People</h1>;
  return (
    <div className="container">
      <UserForm handleSubmit={handleSubmit} />
      <Table peopleData={people} removePeople={removePeople} title={title} />
    </div>
  );
};

export default TableUsers;
```

### Rutas: Errores

- Tal  y  como  hemos  visto  en  la  definición  de  las  rutas,  se  pueden declarar elementos para gestionar un error.

- Los  errores  pueden  renderizar  un  elemento  genérico  de  error  si  se define en el padre, ó, puede renderizar un elemento por cada ruta.

- Si se define a nivel de elemento padre, el renderizado no se hará en la misma posición que un hijo.

### Sobre nuestra aplicación my-twelfth-app II errorElement

- Añadir un errorElement a la ruta “/”
- Si desde el loader de **TableUsers** provocamos una excepción, vemos que obtenemos un error en toda la página web.
- Para solucionarlo, podríamos crear un elemento genérico con tan  sólo  2  atributos,  **errorElement**  y  **children**  con  el  resto  de rutas.
- Probamos el resultado

```javascript
(
  path: "/",
  element: <PublicLayout />,
  errorElement: <div>Oops! There was an eror.</div>,
  childre: [

  ]
)
/******************/
// src/TableUsers.js
export async function loader() {
  throw new Error("oh an error!");
}

/**************************/
const router = createBrowserRouter([
  {
    path: "/",
  element: <PublicLayout />,
  errorElement: <div>Oops! There was an eror.</div>,
  childre: [
    {
      errorElement: <div>Oops! There was an error in a child.</div>,
      children: [
        {
          path: "clock",
          element: <Clock />,
        },
        {
          path: "people",
          element: <TableUsers />,
          loader: usersLoader,
          action: usersAction,
        },
      ],
    },
  ],
  },
]);
```

### Cómo realizar el ejercicio sobre my-twelfth-app

- Crear la function **Loader** en `src/components/TableUsers.js` de donde se exporta y es la que se encarga de traer los datos de una API de prueba.
- Exportar la function **Loader** en el archivo `routes/TableUsers.js` que se encargara de los datos de la API.
- Actualizar `src/router.js` para usar **Loader**.
- El componente **PublicLayout** debe utilizar **Link** to= y tener el componente **Outlet** para renderizar las ruas hijas en su `src/routes/PublicLayout.js`.
- Verificar que **App.js** está importando y utilizando **RouterProvider** con el router configurado en `src/App.js`.
- Verificar que **index.js** está configurado correctamente para renderizar el componente App en `src/index.js`.

-- Implementar cambios para manejar las acciones de formularios:

- Renombrar la **class Form** a **UserForm** en `src/routes/Form.js` y exportala como UserForm.
- Actualizar **TableUsers.js** para usar **UserForm** en `src/routes/TableUsers.js`.
- Añadir la function **action** (como quieras llamarle) en el archivo `src/routes/TableUsers.js` que gestiona los datos del formulario y hace una llamada a la API para añadir un usuario.
- Actualizar `src/router.js`para usar la function **action** en la ruta de TableUsers.
- Como estoy usando una API fake y la creación es ficticia y no puedo ver que los datos se actualizan podemos hacer los siguientes pasos:
  
  - En `src/routes/TableUsers.js`vamos a importar los **hooks** de **useActionData** y **useEffect** para manejar la adición de usuarios y actualizar la tabla y es importante incluir estos en ìmport {} `useEffect` en 'react' y `useActionData` en 'react-router-dom'.

-- Implementar la gestión de errores:

- Añadir **errorElement** en `src/router.js` para manejar los errores de manera genérica.
- Provocar una Excepción en el Loader de TableUsers y ver cómo se maneja el error en `src/routes/TableUsers.js`.
  - Al implementar provoca que el resto del código sea ilegible y no se pueda ejecutar y la manera es:
    - Error Handling: **try...catch** block catch manejará el error de manera apropiada durante la ejecución de todo el código.
    - Fetching Data: **fetch**  podrá realizar la request a la URL y convertirla en JSON usando el method JSON.
    - Mapping Data: el **usersApi.users.map** se usa para transformar el user data dentro de un nuevo formato donde cada user objecto contiene solo el nombre y trabajo como propiedades.
    - Returning Data: La transformación anterior de user data es retornada desde la function **loader**.
  - En conclución manejando el error apropiadamente y teniendo por seguro que el código es legible, se consigue que la function loader trabaje como es de esperar.

### Seguir y crear la aplicación de contactos

[React Router Tutorial](https://reactrouter.com/6.28.0/start/tutorial)

- Primero:

```bash
npm create vite@latest React-router-tutorial -- --template react # creará un nuevo Vite project
npm install # instalar dependencias
npm run dev # iniciar el servidor de Desarrollo
npm install vite --save-dev # igual es necesario instalar Vite específicamente como dependecia de Desarrollo y volver a iniciar el servidor con el paso anterior.
npm install --legacy-peer-deps # puede que sea necesario instalar estas para resolver conflictos de dependencias de manera flexible y si quieres asegurarte vuelve a iniciar el servidor.

```JavaScript
if (!token) {
navigate("/login");
} else {
const decodedToken = decodeToken(token);
const currentTime = Date.now() / 1000; // Convertir a segundos
if (decodedToken.exp < currentTime) {
setToken();
localStorage.removeItem("accessToken");
navigate("/login");
} else {
setUser(decodedToken.user);
}
}
```
