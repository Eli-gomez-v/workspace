/*Crea  un  script  que  pida  al  usuario  el  diámetro  de  una  rueda  y  su  grosor  (en 
metros) y a través de condicionales if realice las siguientes operaciones: */
function calcularRueda() {
    let diametro = parseFloat(document.getElementById("diametro").value);
    let grosor = parseFloat(document.getElementById("grosor").value);
    let resultado = "";

    if (isNaN(diametro) || isNaN(grosor)) {
        resultado = "Por favor, introduce valores numéricos válidos.";
    } else {
        // Condicional para el diámetro
        if (diametro > 1.4) {
            resultado = "La rueda es para un vehículo grande.";
            if (grosor < 0.4) {
                resultado += " El grosor para esta rueda es inferior al recomendado.";
            }
        } else if (diametro > 0.8) {
            resultado = "La rueda es para un vehículo mediano.";
            if (grosor < 0.25) {
                resultado += " El grosor para esta rueda es inferior al recomendado.";
            }
        } else {
            resultado = "La rueda es para un vehículo pequeño.";
        }
        // Mostrar resultado
        document.getElementById("output").innerText = resultado;
    }
}
