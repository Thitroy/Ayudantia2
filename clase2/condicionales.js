//Ejercicio 4 
console.log("*****************")
console.log("Condicionales:")
const numero6 = 10;
const numero7 = 20;
const numero8 = 30;

//Numero mayor
if( (numero6 > numero7 )  && (numero6 > numero8 ) )
    {
     console.log("El mayor es: "+ numero6);
}
else if ((numero7 > numero8 ) && (numero7 > numero6)) {
    console.log("El mayor es: "+ numero7 )

}
else {
    console.log("El mayor es: "+ numero8);
}


//Numero menor
if( (numero6 < numero7 )  && (numero6 < numero8 ) )
    {
     console.log("El menor es: "+ numero6);
}
else if ((numero7 < numero8 ) && (numero7 < numero6)) {
    console.log("El menor es: "+ numero7 );

}
else {
    console.log("El menor es: "+ numero8);
}
    



//Pares e inpares
if((numero6 % 2 )==0){
    console.log(`El numero ${numero6} es par`)

}
else {
    console.log(`El numero ${numero6} es inpar`)
}



if((numero7 % 2)==0){
    console.log(`El numero ${numero7} es par`)

}
else {
    console.log(`El numero ${numero7} es inpar`)
}



if((numero8 % 2)==0){
    console.log(`El numero ${numero8} es par`)

}
else {
    console.log(`El numero ${numero8} es inpar`)
}



// Multiplos de los numeros

if((numero6 % 5 )==0){
    console.log(`El numero ${numero6}  si es multiplo de 5`)

}
else {
    console.log(`El numero ${numero6} no es multiplo de 5`)
}



if((numero7 % 5)==0){
    console.log(`El numero ${numero7}  si es multiplo de 5`)

}
else {
    console.log(`El numero ${numero7} no es multiplo de 5`)
}



if((numero8 % 5)==0){
    console.log(`El numero ${numero8} si es multiplo de 5 `)

}
else {
    console.log(`El numero ${numero8} no es multiplo de 5`)
}
