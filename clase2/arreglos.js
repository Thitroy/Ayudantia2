
//Ejercicio 7
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
