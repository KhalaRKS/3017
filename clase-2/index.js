// 1 No se puede redeclarar una variable con const
// 2 su valor va a ser constante durante toda su vida
// 3 No se puede inicializar una variable const sin valor
// 4 No se puede reasignar el valor de una variable const
// const nombre = "Pedro";

// if (true) {
//   const nombre = "Juan";
//   console.log(nombre);
// }

// const nombre = "Alba";

// let apellido = "Perez";

// apellido = "Gomez";

// 1 No se puede redeclarar una variable con let
// 2 su valor puede variar durante toda su vida
// let apellido = "Perez";

// 1 Se puede redeclarar una variable con var
// 2 su valor puede variar durante toda su vida
// 3 Se puede inicializar una variable var sin valor
// 4 Se puede reasignar el valor de una variable var
// 5 NO LA DEBO USAR JAMASSSSSSSSSSSSSSSSSS
// var nombre = "juan"

let numero = 5;

// todas son equivalentes

// sinonimo de numero = numero + 1
// numero = numero + 1;
// numero += 1;
// incrementa solo de a 1
// numero++;
// numero = numero + 1

// numero -= 1
// numero = numero - 1
// decrementa solo de a 1
// numero--

// numero *= 2
// numero = numero * 2

// numero /= 2
// numero = numero / 2

// numero %= 2
// numero = numero % 2

let nombre = "Juan";

// // equivalentes
// // if (verdadero == true)

// if (nombre != null) {
//   console.log("Hola " + nombre);
// } else {
//   console.log("Hola extraño");
// }

let edad = 20;
// if (edad > 18) {
//   console.log("Hola " + nombre, "usted es mayor de 18 años");
// } else if (edad == 18) {
//   console.log("Hola " + nombre, "usted tiene 18 años");
// } else {
//   console.log("Hola " + nombre, "usted es menor de 18 años");
// }

switch (edad) {
  case 19:
    console.log("Hola " + nombre, "usted tiene 19 años");
    break;
  case 20:
    console.log("Hola " + nombre, "usted tiene 20 años");
    break;
  case 21:
    console.log("Hola " + nombre, "usted tiene 21 años");
    break;

  default:
    console.log("Hola " + nombre, +" " + edad + "años");
    break;
}

// Seguimos en la próxima clase los temas pendientes y repasamos lo ultimo visto
