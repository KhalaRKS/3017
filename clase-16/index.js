
// Crear un archivo HTML que tenga un input de tipo "number", un botón y 
// un contenedor en el cual renderizar el resultado de la búsqueda que se haga. 

// 👉 Al apretar el botón , deberán capturar el valor ingresado en el input (Que será un número) 
//      mediante el evento "submit" si están usando un formulario o bien el evento "click" si 
//      quieren manejarlo desde el botón.
// Si el número ingresado en el input es valido (es decir, existe una pizza cuyo id 
//     coincide con el número ingresado en el input), se deberá renderizar en el contenedor 
//     una card con los datos de la pizza cuyo id coincida con el número ingresado en el input. 
//     La card deberá contener mínimamente el nombre, imagen y y precio de la pizza. 
//     (Estilizarlo con CSS 🎨).
    
//     🚨 Si el número ingresado no coincide con ningún id, renderizar un mensaje de error en el 
//     contenedor. (No usar alert) 
//     🚨 Si no se ingresa un número, renderizar un mensaje de error diferente en el contenedor.
//     (No usar alert). 
//     🚨 Solo debe renderizarse una única cosa, ya sea la nueva pizza o el nuevo mensaje de error.
//     El resto del contenido de nuestro contenedor se deberá pisar por lo nuevo.
//     El input y el botón no se debén pisar, ya que debemos poder seguir haciendo busquedas.
    
//     ¿Cuál es el desafío final?
    
//     Deberán guardar en localStorage la última pizza buscada y renderizada, y al recargar la 
//     página será esa pizza la que se deberá mostrar en la página. No guardar en el localstorage 
//     en caso de que lo buscado haya generado un error, solamente persistir los datos cuando se 
//     haya encontrado una pizza.
// const fn = (name, lastName) =>{
//     console.log(name, lastName);
// }
// const fn = ({name, lastName}) =>{
//     const {name, lastName} = obj
//     console.log(name, lastName);
// }
const pizzas = [
    {
      id: 1,
      nombre: "Pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
      imagen: "./img/muzzarella.png",
    },
  
    {
      id: 2,
      nombre: "Pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
      imagen: "./img/cebolla.png",
    },
  
    {
      id: 3,
      nombre: "Pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
      imagen: "./img/4quesos.png",
    },
  
    {
      id: 4,
      nombre: "Pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
      imagen: "./img/especial.png",
    },
  
    {
      id: 5,
      nombre: "Pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Jamon", "Anana"],
      imagen: "./img/anana.png",
    },
  ];

const form = document.getElementById('form')
const container = document.getElementById('container')
const error = document.getElementById('error')
const inputNumber = document.getElementById('input-number')


const init = () =>{
    form.addEventListener("submit",searchPizza)
}


const searchPizza = (e) =>{
    e.preventDefault()

    if(inputNumber.value == ""){
        container.innerHTML = ""
        error.textContent = "Por favor ingrese un numero"
        return;
    }

    const pizza = pizzas.find((pizza) => pizza.id == inputNumber.value)

    if(!pizza){
        container.innerHTML = ""
        error.textContent = "No existe una pizza con ese ID"
        return;
    }
    if(pizza){
        error.textContent = ""
        container.innerHTML =renderizarPizza(pizza)
    }
}

const renderizarPizza = (pizza) =>{
    return  `
    <div>
        <h2>${pizza.nombre}</h2>
        <p>$${pizza.precio} dolares</p>
        <img src="${pizza.imagen}"/>
  </div>`
}

init()



/**
 * ¿Cual es el valor de esta constante?
const section = document.getElementById("section")
 * 
1) El elemento cuya ID coincida [1]

2) El elemento cuya tag coincida

3) El elemento cuya class coincida

4) No se puede referenciar un section
 * 
 */

let nombre = "Albano"


let numeros = [2,3,56,6,23,1,3,2,1,10]

numeros.sort((a,b) => a - b)


numeros.unshift(13)
console.log(numeros);


obj.nombre = "pepe"
obj["lastName"] = "rodriguez"
obj = {
    n
}