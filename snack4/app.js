/*

Snack4 (Bonus)
Crea due array che hanno un numero di elementi diversi.  
Aggiungi elementi all’array che ha meno elementi fino a 
quando ne avrà tanti quanti l’altro.

*/


const listaNomi = ["Maria", 
                    "Giulia", 
                    "Sara", 
                    "Lucia", 
                    "Marta", 
                    "Elena", 
                    "Serena", 
                    "Rossella", 
                    "Micol",
                    "Francesca",
                    "Luca", 
];

const listaCognomi = ["Rossi", 
                        "Verdi", 
                        "Gialli", 
                        "Cosimi", 
                        "Dardi", 
];


// minimo 0 e massimo 10
// max = 11;

// formula random
// Math.floor(Math.random() * max);

// let fullName = "";
// let randomOne = Math.floor(Math.random() * listaNomi.length);
// let randomTwo = Math.floor(Math.random() * listaCognomi.length);

// console.log(randomOne);
// console.log(randomTwo);

// fullName = listaNomi[randomOne] + " " + listaCognomi[randomTwo];

// console.log(fullName);


let arrayMinore;
let differenza = 0;

if (listaNomi.length > listaCognomi.length) {
    arrayMinore = listaCognomi;
    differenza = listaNomi.length - listaCognomi.length;
} else if (listaNomi.length < listaCognomi.length) {
    arrayMinore = listaNomi;
    differenza = listaCognomi.length - listaNomi.length;
}


for (let i = 0; i < differenza; i++) {
    arrayMinore.push("placeholder");
}

console.log(listaNomi);
console.log(listaCognomi);