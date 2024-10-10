// Test cliente tiene 10% si el precio de compra llega a 200€ 
// Envío gratuito si el peso total de los productos está por debajo de 5kg > peso/€
// Peso productos:6kg > envío 6€. Gratuito por precio > 100€
// Pago adelantado con tarjeta crédito
function precioTotalCompra(precio, peso, booleado) {
    let precioFinal = precio;
    if (precio > 200) {
        precioFinal *= 0.9
    }
    return precioFinal 
    if (peso >5) {
        return precioFinal
    }
    else {
        precioFinal + peso
    }
}

module.exports = precioTotalCompra;
