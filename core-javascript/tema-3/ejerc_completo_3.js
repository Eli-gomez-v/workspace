 // Ejercicio 1: Comparar switch e if-else
 function ejercicio1() {
    let day = 3;
    let output = document.getElementById('output');

    // Usando switch
    let mensajeSwitch = "";
    switch (day) {
        case 1:
            mensajeSwitch = "Lunes";
            break;
        case 2:
            mensajeSwitch = "Martes";
            break;
        case 3:
            mensajeSwitch = "Miércoles";
            break;
        default:
            mensajeSwitch = "Día no válido";
    }

    // Usando if-else
    let mensajeIfElse = "";
    if (day === 1) {
        mensajeIfElse = "Lunes";
    } else if (day === 2) {
        mensajeIfElse = "Martes";
    } else if (day === 3) {
        mensajeIfElse = "Miércoles";
    } else {
        mensajeIfElse = "Día no válido";
    }

    output.innerHTML = `<strong>Switch:</strong> ${mensajeSwitch} <br> <strong>If-Else:</strong> ${mensajeIfElse}`;
}

// Ejercicio 2: Dos preguntas
function ejercicio2() {
    let respuesta1 = prompt("¿Cuál es la capital de Francia?");
    let respuesta2 = prompt("¿Cuántos planetas hay en el sistema solar?");
    let output = document.getElementById('output');

    if (respuesta1.toLowerCase() === "parís" && respuesta2 === "8") {
        output.innerHTML = "¡Respuestas correctas!";
    } else {
        output.innerHTML = "Alguna respuesta es incorrecta.";
    }
}

// Ejercicio 3: Preguntar por precio
function ejercicio3() {
    let producto = prompt("¿De qué producto quieres saber el precio? (ropa, supermercado, ferretería)").toLowerCase();
    let output = document.getElementById('output');

    switch (producto) {
        case "ropa":
            output.innerHTML = "El precio de la ropa es 50€.";
            break;
        case "supermercado":
            output.innerHTML = "El precio en el supermercado es 30€.";
            break;
        case "ferretería":
            output.innerHTML = "El precio en la ferretería es 20€.";
            break;
        default:
            output.innerHTML = "No tenemos información sobre ese producto.";
    }
}

// Ejercicio 4: Validar diámetro y grosor de una rueda
function ejercicio4() {
    let diametro = parseFloat(prompt("Introduce el diámetro de la rueda (en metros):"));
    let grosor = parseFloat(prompt("Introduce el grosor de la rueda (en metros):"));
    let output = document.getElementById('output');

    if (diametro > 1.4) {
        output.innerHTML = "La rueda es para un vehículo grande.";
        if (grosor < 0.4) {
            output.innerHTML += "<br>El grosor para esta rueda es inferior al recomendado.";
        }
    } else if (diametro > 0.8) {
        output.innerHTML = "La rueda es para un vehículo mediano.";
        if (grosor < 0.25) {
            output.innerHTML += "<br>El grosor para esta rueda es inferior al recomendado.";
        }
    } else {
        output.innerHTML = "La rueda es para un vehículo pequeño.";
    }
}
