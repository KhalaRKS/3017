// let perro = {
//     nombre: "firulais"
// }
// perro.onclick = "hola"

const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("boton-suscripcion");
const padre = document.querySelector("#padre");
const hijo = document.querySelector("#hijo");

const form = document.querySelector("#form");

const logo = document.querySelector("#logo")


const url1 = "./assets/nucba_logo.png"
const url2 = "./assets/nucba.png"
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
});

padre.addEventListener("click", (e) => {
  console.log(e.target);
});
hijo.addEventListener("click", (e) => {
  console.log("Soy el hijo");
  e.stopPropagation();
});

const h1 = document.querySelector("h1");

h1.addEventListener("mouseover", () => {
  h1.innerText = "Hola 3017!";
});

boton.addEventListener("click", (e) => {
  console.log(e.target);
  if (
    h1.innerText == "Te cambie el texto de nuevo" ||
    h1.innerText == "Hola 3017!"
  ) {
     (h1.innerText = "Hola mundo");
  }else{    
      h1.innerText = "Te cambie el texto de nuevo";
  }


  boton.classList.toggle("boton-azul")

//   if (boton.classList.contains("boton-rojo")) {
//     boton.classList.remove("boton-rojo");
//     boton.classList.add("boton-azul");
//   } else {
//     boton.classList.remove("boton-azul");
//     boton.classList.add("boton-rojo");
//   }
});



logo.addEventListener("click", () =>{
    if(logo.getAttribute("src") == url1) return logo.setAttribute("src", url2)

   logo.setAttribute("src", url1)
})

parrafo.addEventListener("change", mostrarAlert);

function mostrarAlert(params) {}
