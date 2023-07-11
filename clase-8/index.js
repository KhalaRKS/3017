// Metodos de arrays

// length
let animales = ["Perro", "Gato", "Tortuga"]
let masAnimales = ["Vaca", "Serpiente", "Cerdo"]
console.log(animales.length);


// indexOf

console.log(animales.indexOf("Perro"));
console.log(animales.indexOf("Vaca"));

// toString

console.log(animales.toString());

// concat

let nuevoArray = animales.concat(masAnimales)
let nuevoArray2 = [...animales, ...masAnimales]

console.log(nuevoArray);


// push & pop
console.log("------------------------");
console.log("push & pop");

// animales.push("Leopardo")
console.log(animales);


// animales.pop()
console.log(animales);

// unshift & shift
console.log("------------------------");
console.log("unshift & shift");

// animales.unshift("Leopardo")

console.log(animales);

// animales.shift()
console.log(animales);


// join
console.log(animales.join(" |-_-| "));
//reverse
console.log(animales);
console.log(animales.reverse());

//slice

animales.push("vaca", "leopardo", "loro")
console.log(animales.slice(3,1));
console.log(animales.slice(2,3));
console.log(animales.slice(1,1));
console.log(animales.slice(-2));




// forEach
//            ej:  animal = "Perro"
animales.forEach((animal, index) =>{
    console.log("El animal en la posición "+index+" es: "+animal);
})
// map
const animalesCategorizados = animales.map((animal, index) =>{
    if(index % 2 === 0){
        return animal + " sin dueño"
    }
    return animal + " con dueño"
})



console.log(animalesCategorizados);

// filter

const animalesConDueño = animalesCategorizados.filter((animal) =>{
    return animal.includes("con dueño")
})

console.log(animalesConDueño);




