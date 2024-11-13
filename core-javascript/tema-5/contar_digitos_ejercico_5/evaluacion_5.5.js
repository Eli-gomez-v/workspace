/* eslint-disable no-undef */
// Ingresar un dígito y un número, crear Fx que diga el
// número de veces que aparece el dígito en el número
// eslint-disable-next-line no-unused-vars
// Función que cuenta las veces que aparece un dígito en un número dado.
function contarDigitoEnNumero(numero, digito) {
  const strNumero = numero.toString();
  const strDigito = digito.toString();
  let contador = 0;

  for (let i = 0; i < strNumero.length; i++) {
    if (strNumero[i] === strDigito) {
      contador++;
    }
    return contador;
  }
}
