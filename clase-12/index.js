// createElement -> Que me sirve para crear un elemento del DOM desde javascript

const cardContainer = document.querySelector("#card-container")

let card = document.createElement("div")
let card2 = document.createElement("div")
card.classList.add("card")
card2.classList.add("card2")

// card ya estalisto

let cardImg = document.createElement("img")
// cardImg.setAttribute("src", "https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png")
cardImg.src = "https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png"
cardImg.classList.add("card-img")

let cardTitle = document.createElement("h3")
cardTitle.classList.add("card-title")
cardTitle.innerText = "Titulo de la tarjeta"

let cardBody = document.createElement("p")
cardBody.classList.add("card-body")
cardBody.innerText = "Descripción de la tarjeta"

let cardButton = document.createElement("button")
cardButton.classList.add("card-button")
cardButton.innerText = "Acción"

// console.log("Card antes de agregarle el contenido");
// console.log(card);

card.appendChild(cardImg)
card.appendChild(cardTitle)
card.appendChild(cardBody)
card.appendChild(cardButton)

// cardContainer.appendChild(card)
// cardContainer.appendChild(card2)

// console.log("Card despues de agregarle el contenido");
// console.log(card);

// console.log(cardImg);
// console.log(cardBody);
// console.log(cardButton);
// console.log(cardTitle);

// cardContainer.innerHTML ="<div class='card'><img src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png' class='card-img' alt=''> <h3 class='card-title'>Titulo imagen</h3><div class='card-body'>Descripción de la imagen</div><button class='card-button'>Acción</button></div>"

// cardContainer.innerHTML = "hola pepito"

// console.log(cardContainer.innerHTML);


const animales = [
  {
    name: "Perro",
    description: "Animal que ladra"
  },
  {
    name: "Gato",
    description: "Animal que maulla"
  },
  {
    name: "pinguino",
    description: "Animal que nada"
  },
  {
    name: "vaca",
    description: "Animal que hace mu"
  }
]


const createTemplate = (animal) =>{
  const {name, description} = animal
  return `
    <div class='card'>
      <h2>${name}</h2>
      <p>${description}</p>
    </div>
  `
}

const elementos = animales.map(createTemplate).join("")

console.log(elementos);


cardContainer.innerHTML = elementos

// cardContainer.innerHTML += createTemplate({name: "Humano", description: "Animal que grita"})

// localStorage.clear()



// if(false){
  //   sessionStorage.setItem("Nombre", "Pepito")
  //   sessionStorage.Apellido = "Rodriguez"
  // }
  
  // TypeScript
  // Dart
  // Java != javaScript
  // Swift y objective-c
  
  let vaca =   {
    name: "vaca",
    description: "Animal que hace mu"
  }
  
  let vacaJSON = JSON.stringify(vaca)
  
  
  localStorage.setItem("animal", vacaJSON)

  let obtenerAnimal = localStorage.getItem("animal")
  let animal = JSON.parse(obtenerAnimal)
  console.log(animal);