// ¿Cuál es la diferencia entre una función síncrona y una función asíncrona en JavaScript?
// La síncrona sigue el hilo de js, la asíncrona al ser detectada pasa a web api  para que la aplicación siga funcionando, y luego de finalizar se envía al callstack queue hasta que el callstack principal está vacío.

// Event Loop -> Envía el código del callstack queue al Callstack principal

// ¿Qué sucede cuando se ejecuta el siguiente código?
// Inicio , Fin , Dentro del setTimeout
console.log("Inicio");

setTimeout(function() {
  console.log("Dentro del setTimeout");
}, 0);

console.log("Fin");


// ¿Puedes explicar el concepto de "callback hell" en el contexto de JavaScript? ¿Cómo se puede evitar?
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let numeroAleatorio = Math.random();
    console.log(numeroAleatorio);
    if (numeroAleatorio > 0.5) {
      resolve('La promesa se resolvio con exito!');
    } else {
      reject(new Error('La promesa no se resolvió correctamente :"('));
    }
  }, 2000);
});




promesa
  .then((res) => {
    const data = JSON.parse(res)
    fetch("https://pokeap.co/api/v2/pokemon/62")
    .then((res) => {
      promesa
      .then((res) => {
      })
    })
  })
  .catch((error) => {
    console.log(error);
  }).finally(() =>{
    console.log("Termino el llamado asincrono!");
  })


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


  // ¿Cuál es el propósito del método Promise.all() y en qué situación sería útil?
  // Se usa para ejecutar un iterable de promesas, pero si falla una fallan todas

  // ¿Por qué es importante manejar errores en código asíncrono? ¿Cómo se manejan los errores en Promesas?
  // try catch en async await y .catch

  // ¿Cuál es la diferencia entre async/await y el uso de Promesas en JavaScript? ¿Cuándo usarías uno en lugar del otro?

  // GET - POST - DELETE - UPDATE 
  //¿Qué es la función fetch('URL', {}) en JavaScript y cómo se usa para realizar solicitudes HTTP asíncronas?
  // fetch hace la petición a la api enviando por parametro la url de la misma
