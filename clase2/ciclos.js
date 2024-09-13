//Ejercicio 5 
console.log("****************");
console.log("Ciclos")
console.log("contando del 1 al 10");
for (let i = 1; i <= 10 ;i++){
    console.log(i);
}

console.log("contando del 10 al 1");
for (let i = 10; i >= 1 ;i--){
    console.log(i);
}

console.log("contando del 1 al 10 de par en par");
for (let i = 1; i <= 10 ;i++){

    if((i % 2)==0){
        console.log(i);
    }
   
}

console.log("contando del 1 al 10 de inpar en inpar");
for (let i = 1; i <= 10 ;i++){

    if((i % 2)==1){
        console.log(i);
    }
   
}

console.log("contando del 1 al 10 de multiplos de 3");
for (let i = 1; i <= 10 ;i++){

    if((i % 3)==0){
        console.log(i);
    }
   
}

console.log("contando del 1 al 10 de multiplos de 5");
for (let i = 1; i <= 10 ;i++){

    if((i % 5)==0){
        console.log(i);
    }
   
}

console.log("contando del 1 al 10 de multiplos de 3 y 5");
for (let i = 1; i <= 10 ;i++){

    if((i % 3)==0 && (i % 5)==0){
        console.log(i);
    }
}

console.log("contando del 1 al 10 de multiplos de 3 o 5");
for (let i = 1; i <= 10 ;i++){

    if((i % 3)==0 || (i % 5)==0){
        console.log(i);
    }
   
}
