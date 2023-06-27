const alertHola = (nombre) => alert("Hola " + nombre);

const consoleHola = (nombre) => console.log("Hola " + nombre);

const elegirSaludo = (otraFuncion) => {
  const nombre = prompt("Ingrese su nombre"); // 'Juan'
  otraFuncion(nombre); // mandemos unas funcion
  // 5(nombre)
};

// elegirSaludo(5);

/**
 *
 * @param {Function} mascota recibe una función para elegir una mascota
 * @param {String} persona recibe un string con el nombre de la persona
 * @returns
 */
const elegirMascotaParaPersona = (mascota, persona) =>
  console.log(persona + " tiene un" + mascota());

function enviarPerro2() {
  return " perro";
}

const enviarPerro = () => ' perro';
const enviarGato = () => " gato";
const enviarPez = () => " pez";
const enviarConejo = () => " conejo";

 elegirMascotaParaPersona(() => ' perro', 'Juan');
 elegirMascotaParaPersona(enviarPez /*  () => ' pez' */, 'Rodrigo');
 elegirMascotaParaPersona(() => ' gato', 'Jonathan');

/**
 * Crea un bucle que por cada iteración muestre en consola
 * un mensaje que diga en que número de iteración en la que estamos.
 * Tiene que mostrar desde la iteración 1 a la 50 inclusive.
 */

// for (let index = 0; index < 50; index++) {
//     console.log(index + 1);
// }

// let index = 0

// while (index < 50) {
//     console.log(index + 1);
//     index++
// }

/**
 * Ahora vamos a hacer el camino inverso al camino anterior,
 * modifícalo de manera tal que la iteración sea del 50 al 1
 */

// for (let index = 50; index > 0; index--) {
//   console.log(index);
// }

/**
 * Escribí una función que reciba como parámetro
 * un nombre y que imprima en consola “hola, soy {nombre} “.
 *
 */

const imprimirNombre = (nombre) => console.log("hola, soy " + nombre);
// imprimirNombre("Erika")

/**
 * Escribí una función que reciba dos números por parámetro,
 * multiplique a cada uno por dos y luego imprima por
 * consola la suma de ambos números multiplicados.
 */

const multiplicar = (numero1, numero2) => {
  console.log(numero1 * 2 + numero2 * 2);
};

// multiplicar(3,2)
/**
 * Escribí una función que pueda recibir un número
 * como parámetro y que imprima por consola la
 * tabla de multiplicación del 1 al 10 de ese número.
 */

const tablaMultiplicacion = (numero) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${numero}x${i} : ${numero * i}`);
  }
};

// tablaMultiplicacion(5)

/**
 * Escribí una función que reciba dos números por parámetro y
 * que imprima por consola todo el intervalo entre ambos números,
 * incluyéndolos. Por ejemplo , si ingresamos 1 y 3 deben
 * imprimirse en consola los números “1” , “2” y “3”.
 * Sin son iguales, que se imprima “Ambos números son iguales”.
 */

const imprimirIntervalo = (numero1, numero2) => {
  let num1 = numero1;
  let num2 = numero2;

  if (numero1 === numero2) return console.log("Ambos números son iguales");

  if (num1 > num2) {
    num1 = numero2;
    num2 = numero1;
  }

  for (let index = num1; index <= num2; index++) {
    console.log(index);
  }
};

imprimirIntervalo(2.5, 8.5);
