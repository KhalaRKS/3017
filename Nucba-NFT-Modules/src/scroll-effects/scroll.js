import ScrollReveal from "scrollreveal"

const heroSection = document.getElementById("hero")
const infoSection = document.getElementById("info")
const discoverSection = document.getElementById("discover")
const productsSection = document.getElementById("products")



const revealSection = (section) =>{
    ScrollReveal().reveal(section, {
        delay: 200, // Lo que tarda en iniciar el efecto
        distance: "100px", // Distancia que recorre el elemento
        duration: 1000, // Duración del efecto
        origin: "bottom", // Desde donde aparece el elemento
        reset: false, // Si se debe reiniciar el efecto y volver a ejecutarse
    })
}


export const scrollEffectInit = () =>{
    revealSection(heroSection)
    revealSection(infoSection)
    revealSection(discoverSection)
    revealSection(productsSection)
}