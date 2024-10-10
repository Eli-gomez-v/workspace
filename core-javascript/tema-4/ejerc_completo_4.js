
function ejercicio1_1() {
    let output = document.getElementById('output');
    output.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        output.innerHTML += i + '<br>';
    }
}

function ejercicio1_2() {
    let output = document.getElementById('output');
    output.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            output.innerHTML += i + '<br>';
        }
    }
}

function ejercicio1_3() {
    let output = document.getElementById('output');
    output.innerHTML = '';
    for (let i = 20; i <= 1000; i += 20) {
        output.innerHTML += i + '<br>';
    }
}

function ejercicio1_4() {
    let output = document.getElementById('output');
    let size = 5; // Tamaño del cuadrado
    output.innerHTML = '';
    for (let i = 0; i < size; i++) {
        let line = '';
        for (let j = 0; j < size; j++) {
            line += '* ';
        }
        output.innerHTML += line + '<br>';
    }
}

function ejercicio1_5() {
    let output = document.getElementById('output');
    let size = 5; // Tamaño del rombo
    output.innerHTML = '';
    // Parte superior del rombo
    for (let i = 1; i <= size; i++) {
        let line = '&nbsp;'.repeat(size - i) + '* '.repeat(i);
        output.innerHTML += line + '<br>';
    }
    // Parte inferior del rombo
    for (let i = size - 1; i >= 1; i--) {
        let line = '&nbsp;'.repeat(size - i) + '* '.repeat(i);
        output.innerHTML += line + '<br>';
    }
}

function ejercicio1_6() {
    let output = document.getElementById('output');
    output.innerHTML = '';
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 10; j++) {
            output.innerHTML += `${i} x ${j} = ${i * j}<br>`;
        }
        output.innerHTML += '<br>';
    }
}

function ejercicio1_7() {
    let output = document.getElementById('output');
    let keepAsking = true;
    while (keepAsking) {
        let num = parseInt(prompt("Introduce un número para multiplicar"));
        let mult = parseInt(prompt(`¿Por cuánto quieres multiplicar ${num}?`));
        alert(`${num} x ${mult} = ${num * mult}`);
        keepAsking = confirm("¿Quieres hacer otra multiplicación?");
    }
    output.innerHTML = "Multiplicaciones completadas.";
}

function ejercicio1_8() {
    let output = document.getElementById('output');
    let num = parseInt(prompt("Introduce un número:"));
    output.innerHTML = '';
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            output.innerHTML += i + '<br>';
        }
    }
}

function ejercicio1_9() {
    let output = document.getElementById('output');
    let totalNums = parseInt(prompt("¿Cuántos números quieres sumar?"));
    let suma = 0;
    for (let i = 0; i < totalNums; i++) {
        let num = parseInt(prompt("Introduce un número:"));
        suma += num;
    }
    output.innerHTML = `La suma de los números es: ${suma}`;
}

function ejercicio1_10() {
    let output = document.getElementById('output');
    let input = prompt("Introduce un número o un texto:");
    output.innerHTML = '';
    if (!isNaN(input)) {
        let num = parseInt(input);
        output.innerHTML += `Divisores de ${num}: `;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                output.innerHTML += i + ' ';
            }
        }
    } else {
        output.innerHTML += "Los caracteres del texto son: <br>";
        for (let char of input) {
            output.innerHTML += char + '<br>';
        }
    }
}

function ejercicio1_11() {
    let output = document.getElementById('output');
    let num = parseInt(prompt("Introduce un número entero:"));
    output.innerHTML = '';
    for (let i = 1; i <= num; i += 2) {
        let line = '';
        for (let j = i; j >= 1; j -= 2) {
            line += j + ' ';
        }
        output.innerHTML += line + '<br>';
    }
}

function ejercicio1_12() {
    let output = document.getElementById('output');
    let text = prompt("Introduce un texto:");
    output.innerHTML = `Texto invertido: ${text.split('').reverse().join('')}`;
}

function ejercicio1_13() {
    let output = document.getElementById('output');
    let input;
    do {
        input = prompt("Introduce algo para hacer eco (escribe 'salir' para terminar):");
        if (input.toLowerCase() !== 'salir') {
            output.innerHTML += input + '<br>';
        }
    } while (input.toLowerCase() !== 'salir');
}
