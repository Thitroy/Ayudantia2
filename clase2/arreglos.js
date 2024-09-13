
//Ejercicio 7
/**
 * 1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
**/
function arregloSuma(arreglo){
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++){
        suma = suma + arreglo[i];
    }
    return suma;
}
console.log("****************");
console.log("Funciones con arreglos");
console.log("La suma del arreglo es "+ arregloSuma([14,10,1]));

function arregloPromedio(arreglo){
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++){
        suma = suma + arreglo[i];
    }
    return suma/arreglo.length;
}
console.log("El promedio del arreglo es "+ arregloPromedio([14,10,3]));


function arregloMayusculas(arreglo){
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++){
        nuevoArreglo.push(arreglo[i].toUpperCase());
    }
    return nuevoArreglo;
}
console.log("El arreglo en mayusculas es "+ arregloMayusculas(["camila","fernanda","juan"]));

function arregloPares(arreglo){
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++){
        if((arreglo[i] % 2)==0){
            nuevoArreglo.push(arreglo[i]);
        }
    }
    return nuevoArreglo;
}
console.log("El arreglo de pares es "+ arregloPares([3,4,7,8,10,15,16]));
