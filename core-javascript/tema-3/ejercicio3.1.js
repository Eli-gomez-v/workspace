// Ejemplo de switch como un bloque de if:
let day = 3;

// Usando switch
switch(day) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Día no válido");
}

// Usando if-else
if(day === 1) {
    console.log("Lunes");
} else if(day === 2) {
    console.log("Martes");
} else if(day === 3) {
    console.log("Miércoles");
} else {
    console.log("Día no válido");
}
/* switch: es más claro para manejar múltiples casos discretos.
if-else: es más flexibvle para condiciones complejas 
(puede usar comparaciones más complicadas).*/