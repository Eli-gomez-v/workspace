//Investiga cómo se declara una clase: Son una forma de definir plantillas para crear objetos con métodos y propiedades, introducidas en ES6
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  let persona1 = new Persona("Eli", 50);
  persona1.saludar();
  