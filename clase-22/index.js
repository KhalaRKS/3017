// fetch("https://pokeapi.co/api/v2/pokemon/62")
//   .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       console.log(`Hola, mi nombre es ${data.name}`);
//     })
//     .catch((error) => console.error(error))
//   .finally(() => console.log("Se termino de consultar"));


// async function getPokemon(params) {
  
// }

// const promise = new Promise((resolve, reject) =>{
//   resolve("JSON")
//   reject("ERROR")
// })

const getPolywrath = async () => {

  try {
    const response = await fetch("https://pokeap.co/api/v2/pokemon/62")
    const data = await response.json()
    console.log(data);
    console.log(`Hola, mi nombre es ${data.name}`);

    const json = await fetch("https://pokeap.co/api/v2/pokemon/62")

  } catch (error) {
    console.log("hubo un error y es:" + error);
  }
}

getPolywrath()

