
function iniciarBucle() {
    while (true) {
        let numero1 = prompt("Introduce el primer número:");
        let numero2 = prompt("Introduce el segundo número:");

        // Si el usuario cancela el prompt, romper el bucle
        if (numero1 === null || numero2 === null) {
            alert("Bucle terminado.");
            break;
        }

        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);

        if (!isNaN(numero1) && !isNaN(numero2)) {
            let resultado = numero1 * numero2;
            alert(`El resultado de multiplicar ${numero1} x ${numero2} es: ${resultado}`);
        } else {
            alert("Por favor, introduce números válidos.");
        }
    }
}

function cerrarPagina() {
    window.close(); // Intenta cerrar la página del navegador
}
