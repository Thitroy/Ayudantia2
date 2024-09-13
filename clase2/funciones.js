//Ejercicio 6
console.log("****************");
console.log("Funciones")
function mayusculas(palabra){
    return palabra.toUpperCase();
}
console.log(mayusculas("camila"));

function minusculas(palabra){
    return palabra.toLowerCase();
}
console.log(minusculas("CAMILA"));



function restar(numero1,numero2){
    return numero1 - numero2;
}
console.log("El resultado de la resta es "+ restar(100,10));

function dividir(numero1,numero2){
    return numero1 / numero2;
}
console.log("El resultado de la division es "+ dividir(100,10));

function multiplicar(numero1,numero2){
    return numero1 * numero2;
}
console.log("El resultado de la multiplicacion es "+ multiplicar(100,10));

function longitud(palabra){
    return palabra.length;
}

console.log("La longitud de la palabra camila es "+ longitud("camila"));