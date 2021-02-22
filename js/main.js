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


// ==================================== Nivell 2  ====================================

/* Exercici 7: 
Realitzar un programa en ES6, amb al menys una funció.
Aquest programa demana a l'usuari dos nombres de l'1 a l'10 (con promp es suficient).
Un cop introduïts, es mostra per consola la taula de multiplicar del número 1 que va fins al número 2 */
/*
// Creamos las variabvles mediante prompts
let num1 = prompt("Escriu un número del 1 al 10");
let num2 = prompt("Escriu un altre número del 1 al 10");

let numStart = 1; //Para que inicializar por el num 1


//Arrow function que hace la operación de calculo.
const tabla = (numStart) => {
    //Entrará en la condición si el (numStart) es más "< o =" al máx multiplicador indicado por el usuario.
    if (numStart <= num2) {
            
        if ((num1 != "" && num1 <= 10 && num1 >= 1) && (num2 != "" && num2 <= 10 && num2 >= 1)) {  //Si ambos "" inputs tienen valores & el número es igual o menor a 10
            //Imprimimos mediante consola solo el resultado max introducido
            console.log(`${num1}x${numStart}=${num1 * numStart}`);
            
            tabla(numStart + 1); //Llamamos a la función tabla incrementando 1 el valor del numAux
        } else {
            alert("Escriu números del 1 al 10"); //Si las condiciones anteriores no se cumplen saldrá este mensaje
        }
    }
}
tabla(numStart);

*/


/* Exercici 8: 
Modificar l'exercici anterior perquè els números s'introdueixin a través d'un formulari (amb validacions), 
i que la taula de multiplicar la mostri en una taula HTML */


//Llamamos a la función con addEventListener al clickar el botón submit
document.getElementById("submit").addEventListener ("click",() => {
    let num1 = document.forms["tables"]["num1"]; // recogemos el input num1
    let num2 = document.forms["tables"]["num2"]; // recogemos el input num1
    
    // Con "is-invalid" eliminamos los mensajes de error sin contenido
    num1.classList.remove("is-invalid"); 
    document.getElementById("error1").textContent ="";
    
    num2.classList.remove("is-invalid"); 
    document.getElementById("error2").textContent ="";
    
    // Valores vacíos o valores mayores de 10 o inferior a 1
    if(num1.value == "" || num1.value > 10 || num1.value < 1) {
        // Añadimos la clase is-invalid
        num1.classList.add("is-invalid");
        //Se imprimirá un mensaje de error si no se cumple el requisito
        document.getElementById("error1").textContent = "Has d'escriure un número del 1 al 10";
    }
    if (num2.value == "" || num2.value > 10 || num2.value < 1) {
        // Añadimos la clase is-invalid
        num2.classList.add("is-invalid");
        //Se imprimirá un mensaje de error si no se cumple el requisito
        document.getElementById("error2").textContent = "Has d'escriure un número del 1 al 10";
}
    //Si ambos "" inputs tienen valores & el número es igual o menor a 10
    if ((num1.value != "" && num1.value <= 10 && num1.value >= 1) && (num2.value != "" && num2.value <= 10 && num2.value >= 1)) { 
        let tablaRes = document.getElementById("tablaHTML"); // Recoge el elemento del html para la tabla
        tablaRes.classList.add("tabla"); // Asigna la clase tabla
        changePage();
        makeTable(num1, num2, tablaRes);
    }
});

// Función para crear la tabla
const makeTable = (num1, num2, tablaRes, numStart=1) => {
    
    //Indicamos que la condición se cumple si el numStart(1) es más pequeño que el numero introducido por el usuario
    if (numStart <= num2.value){
        // creamos las columnas
        let row = document.createElement('tr');
        tablaRes.appendChild(row); //agrega un nodo como el último hijo de un nodo.
        
        // creamos las filas
        let datos = document.createElement('td'); 
        row.appendChild(datos); //agrega un nodo como el último hijo de un nodo.

        //name.textContent devuelve el contenido de texto del nodo especificado y sus descendientes. Multiplicaremos el valor num1 y num2 
        datos.textContent = `${num1.value}x${numStart}`;

        let datos2 = document.createElement('td'); 
        row.appendChild(datos2); //agrega un nodo como el último hijo de un nodo.
        
        //Imprimirá resultado: num1 * num2 = resultado
        datos2.textContent = `= ${num1.value * numStart}`;
        
        //En esta función llamamos al numStart incrementando +1
        makeTable(num1, num2, tablaRes, numStart+1);
    }
}

// Esta función servirá para cambiar del formulario a los resultados.
const changePage = () => {
    document.getElementById("caja1").style.display = "none";
    document.getElementById("caja2").style.display = "block";
}