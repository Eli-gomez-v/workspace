/* 3.  Crea una página web que te pregunte de qué quieres saber el precio. Puede 
ser una tienda de ropa, un supermercado, una ferretería... En función de la 
contestación del cliente te responde con el precio. Este ejercicio se valorará 
más positivamente con un switch. */
let producto = prompt("¿De qué producto quieres saber el precio? (ropa, supermercado, ferretería)").toLowerCase();

switch(producto) {
    case "ropa":
        alert("El precio de la ropa es 50€.");
        break;
    case "supermercado":
        alert("El precio en el supermercado es 30€.");
        break;
    case "ferretería":
        alert("El precio en la ferretería es 20€.");
        break;
    default:
        alert("No tenemos información sobre ese producto.");
}
