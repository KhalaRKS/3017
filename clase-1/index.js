
// Variable String
var nombre = "Juan";

// Variable Number
var edad = 25;

// Variable Boolean
var esMayor = true;

// Variable Symbol
var simbolo = Symbol("mi simbolo");

// Variable Undefined
// El valor undefined es el valor de una variable que no ha sido inicializada
var esIndefinido = undefined;
var esIndefinido2;

// Variable Null
// El valor null es el valor de una variable que ha sido inicializada pero no tiene valor
var esNulo = null;


// Podemos concatenar variables de tipo string con el operador +
console.log("Mi nombre es: " + nombre + " y tengo " + edad + " años");

// podemos concatenar variables de tipo string con variables de tipo number
console.log("Mi edad + 5 es: " + (edad + 5));

// Podemos concatenar variables de tipo string con variables de tipo boolean
console.log("Es mayor: " + esMayor);

// No podemos relizar operaciones numericas con variables que no sean number con variables de tipo number
// Podriamos obtener errores como NaN (Not a Number)
console.log("Es mayor: " + (esMayor / 2));

// Podemos realizar operaciones numericas con variables de tipo number
// Suma
console.log("Mi edad + 2: " + (edad + 2));
// Resta
console.log("Mi edad - 2: " + (edad - 2));
// Multiplicacion
console.log("Mi edad * 2: " + (edad * 2));
// Division
console.log("Mi edad / 2: " + (edad / 2));
// Modulo (Resto de la division)
console.log("Mi edad % 2: " + (edad % 2));

// Temas pendientes clase 1

// La funcion prompt permite ingresar un valor por teclado
 var nombre = prompt("Ingrese su nombre");

 // La funcion console.log permite mostrar un mensaje en la consola
 console.log(nombre);

 // La funcion alert permite mostrar un mensaje en pantalla
 alert("Su nombre es: " + nombre);
