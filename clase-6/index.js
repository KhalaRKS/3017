
const generarFuncion = () => {
  // Esto le pertenece a generar funcion
  let contador = 0; // <-------------
  const sumarUno = () => {
    // Esto le pertenece a sumarUno
    return console.log(contador++);
  };
  // () => {
  //   return console.log(contador++);
  // };
  return sumarUno;

};

const incrementar = generarFuncion();
// incrementar, dentro tiene el valor :
  // () => {
  //   return console.log(contador++);
  // };


console.log(incrementar);

  // const sumarUno = () => {
  //   let contador = 0;
  //   return console.log(contador++);
  // }

// incrementar();
// incrementar();
// incrementar();
// incrementar();


// objetos en js

let persona = "pepe"


const PERSONA = "PEPITO"

const Persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  mascotas: ["perro", "gato", "pez"],
  presentarse: function () {
    console.log("Hola, mi nombre es " + this.nombre);
  }
}



// Persona.presentarse()

// console.log(Object.entries(Persona));

// console.log(Object.values(Persona));
// console.log(Object.keys(Persona));

// console.log(persona.nombre + " " + persona.apellido);
// console.log(persona.mascotas[0]);

// for (const mascota of persona.mascotas) {
//   console.log("mascotas de juan: " + mascota);
// }



// Spread y rest operator


const Mascota = {
  nombre: "Firulais",
  edad: 5,
  raza: "perro",
}

const Mascota2 = {
  nombre: "Ramonsito",
  color: "Marron",
  ladrar: function () {
    console.log("guau guau");
  }
}

// El spread en objetos pisas los valores de propiedaes que se repiten
const Mascota3 = {...Mascota, ...Mascota2 }
// edad: 5,
// raza: "perro",
// nombre: "Ramonsito",
// color: "Marron",
// ladrar: function () {
//   console.log("guau guau");
// }

// console.log(Mascota3);

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [...array1, ...array2]
// const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(array3);



const sumar = (a, b, ...rest) => {
  let resultado = a + b;
  if(rest.length > 0) {
    for (let index = 0; index < rest.length; index++) {
      resultado += rest[index];
    }
  }
  return resultado;
}


// console.log(sumar(5,10));
// console.log(sumar(5,5));
// console.log(sumar(5,10,9,7,4,5,32,1));


const [primero, segundo, ...resto] = array3;

console.log(primero);
console.log(segundo);
console.log(resto);

const { nombre, edad, ...restoDePropiedades } = Mascota3;

console.log(nombre);
console.log(edad);
console.log(restoDePropiedades);
