/* eslint-disable no-multiple-empty-lines */
/* eslint-disable generator-star-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/**
 * Capitaliza el primer nombre y convierte el apellido a mayúsculas usando una clase y un generador.
 * @param {string} name - Una cadena con dos palabras (nombre y apellido).
 * @returns {string} El nombre capitalizado y el apellido en mayúsculas.
 * @throws {TypeError} Si el argumento no es una cadena.
 * @throws {Error} Si el argumento no contiene exactamente dos palabras.
 */
function capitalizeLastName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('El argumento debe ser una cadena.');
    }
  
    const words = name.trim().split(' ');
  
    if (words.length !== 2) {
      throw new Error('Debe haber exactamente dos palabras (nombre y apellido).');
    }
  
    // Clase interna que maneja la capitalización y conversión a mayúsculas
    class NameFormatter {
      constructor([firstName, lastName]) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
  
      // Generador para formatear las palabras
      *formatNames() {
        yield this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1).toLowerCase();
        yield this.lastName.toUpperCase();
      }
    }
  
    // Instanciamos la clase
    const formatter = new NameFormatter(words);
    const formattedNames = [...formatter.formatNames()];
  
    return formattedNames.join(' ');
  }
  
  module.exports = capitalizeLastName;
