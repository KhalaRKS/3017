import Typewriter from 'typewriter-effect/dist/core';



const typewriterSpan = document.querySelector(".typewriter")


const typewriter= new Typewriter(typewriterSpan,{
    delay: 50,
    loop: false
})




export const typewriterInit = () => {
    typewriter.pauseFor(1000) // Pausa antes de iniciar el efecto
    .typeString("Crypto") // Escribe el texto
    .pauseFor(300) // Pausa para la próxima acción
    .deleteChars(6) // Borra la cantidad caracteres indicados
    .typeString("Tecnología") // Escribe el texto
    .pauseFor(300) // Pausa para la próxima acción
    .deleteChars(10) // Borra la cantidad caracteres indicados
    .typeString("Nucba") // Escribe el texto
    .pauseFor(300) // Pausa para la próxima acción
    .start(); // Inicia el efecto
}

