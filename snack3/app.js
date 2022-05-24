/*
Snack3
Crea un array di numeri interi
e fai la somma di tutti gli elementi 
che sono in posizione (indice) dispari


// soluzione
- creare array
- 
*/

let numberArray = [];

// creazione array numeri
for (i = 0; i < 1000; i++) {

    numberArray.push(Math.floor(Math.random() * i));
}

let sommaNumeriDispari = 0;

// somma dei numeri in pos. indice dispari
for (i = 0; i < numberArray.length; i++) {
    // controllo se indice dispari
    if (!(i % 2 === 0)) {
        sommaNumeriDispari = sommaNumeriDispari + numberArray[i];
    }
}

console.log(sommaNumeriDispari);