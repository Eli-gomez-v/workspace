
function fibonacci() {
    let num = prompt("Introduce el número de términos de la serie Fibonacci:");
    let fibo = (n) => (n <= 1 ? n : fibo(n - 1) + fibo(n - 2));
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push(fibo(i));
    }
    document.getElementById('output').innerHTML = "Serie Fibonacci: " + result.join(", ");
}

function mostrarSaludo() {
    document.getElementById('output').innerHTML = "¡Hola! Bienvenido al mundo de JavaScript";
}

function convertirTemperatura() {
    let valor = prompt("Introduce la temperatura:");
    let tipo = prompt("Escribe 'F' para Fahrenheit o 'C' para Celsius:");
    let resultado;
    if (tipo.toUpperCase() === 'F') {
        resultado = (valor - 32) * 5 / 9 + "°C";
    } else if (tipo.toUpperCase() === 'C') {
        resultado = (valor * 9 / 5) + 32 + "°F";
    }
    document.getElementById('output').innerHTML = "Conversión: " + resultado;
}

function validarEmail() {
    let email = prompt("Introduce tu dirección de email:");
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let esValido = regex.test(email);
    document.getElementById('output').innerHTML = esValido ? "Email válido" : "Email inválido";
}

function contarDigitos() {
    let numero = prompt("Introduce un número:");
    let digito = prompt("Introduce un dígito a buscar:");
    let count = [...numero].filter(d => d === digito).length;
    document.getElementById('output').innerHTML = `El dígito ${digito} aparece ${count} veces en el número ${numero}.`;
}

function validarDni() {
    let dni = prompt("Introduce tu DNI:");
    let regex = /^[0-9]{8}[A-Z]$/;
    let esValido = regex.test(dni);
    document.getElementById('output').innerHTML = esValido ? "DNI válido" : "DNI inválido";
}

function longitudUltimaPalabra() {
    let texto = prompt("Introduce un texto:");
    let palabras = texto.trim().split(" ");
    let ultimaPalabra = palabras[palabras.length - 1];
    document.getElementById('output').innerHTML = `La longitud de la última palabra es: ${ultimaPalabra.length}`;
}

function titulo() {
    let texto = prompt("Introduce un texto:");
    let palabras = texto.toLowerCase().split(" ");
    let resultado = palabras.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
    document.getElementById('output').innerHTML = resultado;
}

function calcularAreaCirculo() {
    let radio = prompt("Introduce el radio del círculo:");
    let area = Math.PI * Math.pow(radio, 2);
    document.getElementById('output').innerHTML = `El área del círculo es: ${area.toFixed(2)}`;
}

function calcularAreaRectTri() {
    let base = prompt("Introduce la base:");
    let altura = prompt("Introduce la altura:");
    let areaRect = base * altura;
    let areaTri = (base * altura) / 2;
    document.getElementById('output').innerHTML = `Área del rectángulo: ${areaRect}, Área del triángulo: ${areaTri}`;
}

function cambiarVocal() {
    let texto = prompt("Introduce un texto:");
    let vocal = prompt("Introduce una vocal:");
    let resultado = texto.replace(/[aeiou]/gi, vocal);
    document.getElementById('output').innerHTML = resultado;
}

function calcularPrecioConIVA() {
    let precio = parseFloat(prompt("Introduce el precio:"));
    let iva = parseFloat(prompt("Introduce el IVA (si no lo introduces, será 21):")) || 21;
    let precioFinal = precio + (precio * iva / 100);
    document.getElementById('output').innerHTML = `El precio con IVA es: ${precioFinal.toFixed(2)}`;
}

function textoReves() {
    let texto = prompt("Introduce un texto:");
    let resultado = texto.split("").reverse().join("");
    document.getElementById('output').innerHTML = `Texto al revés: ${resultado}`;
}
