// Imprimir sólo los números múltiplos de 20 del 1 al 1000 por pantalla
const outputDiv = document.getElementById("output");

for (let i = 1; i <= 1000; i++) {
    if (i % 20 === 0) {
        const for = document.createElement ("p");
        for.textContent =i;
        outputDiv.appendcild (for);
    }
}