
const precioTotalCompra = require("../ejercicio-1");

test("aplica el 10% descuento >200", () => {
    expect(precioTotalCompra(1000)).toBe(900);
});
test("precio gratis si pesa >5, sino 1*kg", () => {
    expect(precioTotalCompra(100, 10)).toBe(100);
});
