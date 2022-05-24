/*
Snack1
Inserisci un numero.
se è pari stampa il numero
se è dispari stampa il numero successivo.

// soluzione
- creare basic layout con input
- prelevare dati input inseriti dall'user
- dichiarare i dati in una variabile
- creare un ciclo for da 0 a 1000 numeri
- richiamare dentro al ciclo la variabile dandogli il value/parseInt ?????
- creare IF 
    - divisibile (% 2 === 0) allora stampare il numero dato nell'input-result
    ALTRIMENTI
        - SE non DIVISIBILE stampare il numero successivo.
*/



const numberUser = prompt("Inserisci un numero da 1 a 1000");
number = parseInt(numberUser);

for (let i = 0; i < 1000; i++) {
    console.log(number);

    // if number is even print the number  
    if (number % 2 === 0) {
        let inputResult = document.getElementById("input-result");
        inputResult.innerHTML = number;

        break;
    }

    // number++ --> shortcuts
    number = number + 1;

    // number = number + 4
    // number += 4
}