/* 
Ejercicio en my-third-app
Crear los siguientes componentes:
o habréis notado, hemos estado usando algo que 
parece HTML dentro de nuestro código React, pero no 
es HTML ni un string, es JSX (JavaScript XML)
JSX  es  una  extensión  de  JavaScript  con  el  que 
podemos escribir lo que parece HTML.
No es obligatorio usar JSX para escribir código React, 
en  realidad,  el  código  JSX  usa  por  debajo 
createElement  para  crear  un  objeto  con  sus 
propiedades y contenido. Por ejemplo, ambas variables 
contienen el mismo objeto.
JSX está más cerca de JS que de HTML por tanto hay 
que tener en cuenta algunas características:
- className  se  usa  en  lugar  de  class  ya  que 
class es una palabra reservada en JS
- Las  propiedades  y  métodos  in  JSX  están  en 
camelCase, por ejemplo: onclick => onClick
- Los tags de cierre automático deben acabar con 
un slash:  <img />
Existen herramientas para convertir tu código HTML en 
JSX: https://transform.tools/html-to-jsx
*/

const heading = <h1 className="site-heading">Hello world</h1>;

const heading = React.createElement('h1', { className: 'site-heading' }, 'Hello world');

/*Se  pueden  insertar  expresiones  javascript  dentro  de 
JSX. Para ello usamos las llaves.
A  continuación  vamos  a  declarar  una  variable  name 
que insertaremos dentro de JSX.
Puesto  que  JSX  también  es  una  expresión  se  puede 
usar dentro de condicionales if y bucles for y asignarlo 
a  variables,  aceptarlo  como  argumento  y  retornarlo 
desde funciones.
Se puede poner cualquier expresión de javascript, por 
ejemplo: 2 + 2, user.first_name, formatName(user);
*/

const name = 'John Doe';
const heading = <h1>Hello, {name}</h1>;

class App extends React.Component {
  upperFunction = (name) => { String(name).toUpperCase();
    getGreeting(user) {
      if (user) {
        return <h1>Hello, {this.upperFunction(user)}!</h1>;
      }
      return <h1>Hello, Stranger.</h1>;
    }
   }
   render() {
    const name = 'John Doe';
    return this.getGreeting(name);
   }
  }
