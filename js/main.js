"use strict";

// ==================================== Nivell 1  ====================================

// Exercici 1: Converteix a arrow function 

/* Funció 1 */
const multiply = (num1, num2) => num1 * num2;

console.log(multiply(3,3));

/* Funció 2 */
const toCelsius = fahrenheit => (5/9) * (fahrenheit-32);

console.log(toCelsius(80));

/* Funció 3 */
// Esta función devuelve una cadena con ceros a la izquierda
const padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++){
        numStr = "0" + numStr;
    }
    return numStr;
}

console.log(padZeros(30,12));

/* Funció 4 */
const power = (base, exponent) => {
    let result = 1;
    for (var i = 0; i < exponent; i++){
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
    [{ firstName:'Homer', lastName: 'Simpson' },
    { firstName: 'Marge', lastName: 'Simpson' },
    { firstName: 'Bart',  lastName: 'Simpson' },
    { firstName: 'Lisa',  lastName: 'Simpson' },
    { firstName: 'Maggie',lastName: 'Simpson' }];
    
    // Usamos el método map para crear un nuevo array
    users.map(function (user) {
        
    console.log(user.firstName);

});

