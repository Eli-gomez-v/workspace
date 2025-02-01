# Ejercicios clase

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

```bash
# Para ver en el navegador:
cd /home/curso/Escritorio/workspace/react/my-second-app
npm start
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
Usamos el método map para obtener las filas a mostrar.

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

#### Ejercicios

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

### Renderizado condicional:  &&

En React podemos utilizar el operador ternario condition ? expr1 : expr2 para hacer un renderizado condicional. 
Este  operador  lo  podemos  usar  también  para  renderizar  componentes.  En  nuestro  ejemplo  de  LoginControl,  el 
renderizado de los botones también podría realizarse así:

### Renderizado condicional:  ternario

Es  posible  que  en  alguna  de  nuestras  aplicaciones  necesitemos  que 
según  un  valor,  ya  sea  de  props  o  de  state,  un  componente  no  se 
muestre. La manera de hacerlo es retornando un null. 
- En  nuestra  app  my-tenth-app  creamos  un  nuevo  componente 
Warning  que  espere  recibir  una  prop  warn,  si  no  la  recibe  no 
tiene que mostrarse, pero si recibe la prop debe renderizar un div 
con clase “warning” y el texto “Warning!!”
- Añadir un estilo en App.css para “warning” con color: orange;
- Importar  el  componente  Warning  en  el  componente 
LoginControl.  En  el  renderizado  del  componente  añadir  el 
componente Warning con el valor de prop warn={!isLoggedIn}
- Comprobar lo que ocurre


### Renderizado condicional:  No renderizar

Es posible que en algunos de nuestras aplicaciones necesitemos que según un valor, ya de props o de state, un componente no se muestre. La manera de hacerlo es retornando un null.

- En  nuestra  app  my-tenth-app  creamos  un  nuevo  componente 
Warning  que  espere  recibir  una  prop  warn,  si  no  la  recibe  no 
tiene que mostrarse, pero si recibe la prop debe renderizar un div 
con clase “warning” y el texto “Warning!!”
- Añadir un estilo en App.css para “warning” con color: orange;
- Importar  el  componente  Warning  en  el  componente 
LoginControl.  En  el  renderizado  del  componente  añadir  el 
componente Warning con el valor de prop warn={!isLoggedIn}
- Comprobar lo que ocurre

### Resumen




