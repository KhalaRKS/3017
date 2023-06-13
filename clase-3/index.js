// Ciclos y repeticiones
 //    inicio;           condicion;  incremento // valorInicial++ = valorInicial + 1


// for (let valorInicial = 0; valorInicial < 10; valorInicial++) {
//   console.log("Este es el numero: " + (valorInicial+1));
// }

//array de dias
//  let dias = ["Lunes", "Miercoles","Viernes","Martes", "Jueves",  "Sabado", "Domingo"];

// for (let i = 0; i <= 100; i++) {
//   // 1 % 2 = 1 Nos deja el resto de la división
//   // Va a evaluar que los numeros sean impares
// if (i % 2 == 1) {
//   break;
// }
//  console.log(i);
// }

// let isMayor = false;
// let edad = 18;
// let contador = 0;

// // isMayor = false;
// // Lo hace desde 0 a n
// while (isMayor) {
//   if (edad == contador) {
//     console.log("No es mayor");
    
//  isMayor = false;
//   }else{
//     console.log("Es mayor");
//   }
//   contador++
// }
//  //isMayor = false
//  // Lo hace desde 1 a n
// do{
//   if (edad == contador) {
//     console.log("No es mayor");
    
//  isMayor = false;
//   }else{
//     console.log("Es mayor");
//   }
//   contador++
// }while (isMayor)


// armate un array de dias
let dias = ["Lunes", "Miercoles","Viernes","Martes", "Jueves", "Sabado", "Domingo"];
let nombre= "Juan";

dias[0] // "Lunes"
dias[1] // "Miercoles"
dias[5] // "Sabado"

console.log(dias.length);
console.log(Array.isArray(dias));
 // true
Array.isArray(nombre) // false

for (let index = 0; index < dias.length; index++) {
  const element = dias[index];
  console.log(element);
}
// Seguir clase que viene desde este punto