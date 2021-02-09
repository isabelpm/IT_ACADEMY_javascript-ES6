"use strict";

// ==================================== Nivell 1  ====================================

// Exercici 1: Converteix a arrow function 

/* Funció 1 */
const multiply = (num1, num2) => num1 * num2;

console.log(multiply(3, 3));

/* Funció 2 */
const toCelsius = fahrenheit => (5 / 9) * (fahrenheit - 32);

console.log(toCelsius(80));

/* Funció 3 */
// Esta función devuelve una cadena con ceros a la izquierda
const padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}

console.log(padZeros(30, 12));

/* Funció 4 */
const power = (base, exponent) => {
    let result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(5, 2));

/* Funció 5 */
const greet = (who) => {
    console.log("Hello " + who);
}
greet("Sergi");


// Exercici 2: Arregla l'error 

// En primer lugar definimos variables
var users =
    [{ firstName: 'Homer', lastName: 'Simpson' },
    { firstName: 'Marge', lastName: 'Simpson' },
    { firstName: 'Bart', lastName: 'Simpson' },
    { firstName: 'Lisa', lastName: 'Simpson' },
    { firstName: 'Maggie', lastName: 'Simpson' }];

// Usamos el método map para crear un nuevo array
users.map(function (user) {

    console.log(user.firstName);

});

// Exercici 3: Donat el següent array de strings, mostrar per consola la frase completa usant.reduce()
//usant.reduce(): Ejecuta una funció reductora sobre cada element de un array, retornar como a resultat un únic valor.

var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
var answer = epic.reduce((prev, curr) => `${prev} ${curr}`);

console.log(answer);

// Exercici 4: Crear una funció que accepti un string i retornada aquest string revertit.
// Nota: Usar funció fletxa(arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()

const getReverse = myString => {
    console.log([...myString].reverse());
}
getReverse("Hello World");


// Exercici 5: Reemplaça en el següent bloc de codi la promesa per aync/await:

//Arrow function llamada b()
const b = () => {
    let promises = new Promise((resolve) => {
        setTimeout(() => resolve("DO IT!"), 1000)
    });
    return promises;
}

/*  Creamos la función async a() en formato arrow e incorporo el await en la función b() para que funcione.
    Cuando se llama a una función async, esta devuelve un elemento Promise. Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. */
const a = async () => {
    let c = await b();
    console.log(c);
    doMoreWork();
}

//Llamo a la función a()
a();
const doMoreWork = () => { //Declaro la función doMoreWork con código para su comprobación
    console.log(15);
}


// Exercici 6: Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques.

let tasks = [
    {
        'name': 'Start React web',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on facebook',
        'duration': 240
    }
];

/* Utilitzar el métode .forEach() per obtenir aquest array. Aquest métode crida a la una funció per cada element de una matriu, en ordre.
   SINTAXIS: let nomVariable = [];
             nomVariable.forEach(myFunction);  */

let array = [];
tasks.forEach((item) => {
    array.push(item.name);
});

console.log(tasks);

// Utilitzar .map() per obtenir aquest array, aquest métode crea un nova matriu amb el resultat.
let result = tasks.map((task) => task.name);

console.log(result);