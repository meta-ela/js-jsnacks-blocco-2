/*
Snack2
Generatore di “nomi cognomi” casuali: 
il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.


// soluzione
- due array con nomi e cognomi causali
- 
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
                        "Fornito", 
                        "Civolani", 
                        "Copa", 
                        "Cappiello", 
                        "Stoccafisso", 
                        "Lardo", 
];


// minimo 0 e massimo 10
// max = 11;

// formula random
// Math.floor(Math.random() * max);

let fullName = "";
let randomOne = Math.floor(Math.random() * listaNomi.length);
let randomTwo = Math.floor(Math.random() * listaCognomi.length);

console.log(randomOne);
console.log(randomTwo);

fullName = listaNomi[randomOne] + " " + listaCognomi[randomTwo];

console.log(fullName);
