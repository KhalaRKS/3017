// funciones

// las mayusculas estan reservadas para los valores constantes
// las inciales en mayusculas para clases
// las inciales minusculas para funciones y variables

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

//                             retorno implicito
// const sumarArrowFunction = (a, b) => a + b;
const sumarArrowFunction = (a, b) => {
  a + b;
};

sumarArrowFunction(5, 5);

// let numero = prompt("Ingrese un numero");
//  asignando <- 15
let resultado = sumar(sumar(8, 8), 5); // 1
// console.log(resultado);

// funcion saludar
function saludar(nombre, apellido) {
  alert("Hola " + nombre + " " + apellido);
}

// saludar("Juan", "Perez");

// 10
// 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
// 1
//              3
const factorial = (numero) => {
  if (numero <= 1) {
    return 1;
  }
  return numero * factorial(numero - 1);
};

console.log(factorial(3));
