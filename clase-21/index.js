// setTimeout(() =>{
//   console.log("Hola 3017!");
// },3000)
// setTimeout(() =>{
//   console.log("Todo bien y vos?");
// },1500)

// console.log("Chau 3017!");

// console.log("¿Como estan?");

// let i = 0
// let intervalo = setInterval(() =>{

//   console.log(i++);
//   if(i > 10){

//     clearInterval(intervalo)
//   }
// }, 400)

// for (let index = 100; index < 1000; index+=100) {
//     setTimeout(() =>{
//       console.log(`async index: ${index}`);
//   }, 0)
// }
// for (let index = 100; index < 1000; index+=100) {
//   console.log(`sync index: ${index}`);
// }

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
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  }).finally(() =>{
    console.log("Termino el llamado asincrono!");
  })
