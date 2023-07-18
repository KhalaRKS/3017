// window y document

// window -> hace referencia a toda la ventana en si de nuestra aplicación

// document -> hace referencia a nuestro arbol DOM en donde esta nuestro html

console.log(window);
console.log(document);

const h1 = document.querySelector("h1")

const section_1 = document.getElementById("section-1")
const section_2 = document.getElementById("section-2")

const textos_1 = document.getElementsByClassName("texto")
const textos_2 = document.querySelectorAll(".texto")

const boton = document.querySelector("#boton-suscripcion")

const textos_en_array = [...textos_1,...textos_2]

console.log(textos_1);
console.log(textos_2);

console.log(textos_en_array);


