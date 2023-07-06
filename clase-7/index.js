// strings methods
// En posiciones contamos desde el 0
// En cantidades contamos desde el 1
const texto = "Hola Mundo"; // <--------
const oracion = "Hola me gusta comer galletas, pero solo galletas de chocolate";
console.log(texto.length);

// texto todo a mayuscula
console.log(texto.toUpperCase());
// texto todo a minuscula
console.log(texto.toLowerCase());
console.log("-------------");

console.log(texto);
console.log(oracion);
const newTexto = texto.replace("Hola", "Chau");
const newOracion = oracion.replaceAll("galletas", "tortas");
// Despues del replacce
console.log("-------------");
console.log(newTexto);
console.log(newOracion);

console.log("-------------");
console.log(texto.indexOf("o"));

const texto2 = "    Hola Mundo  ";
console.log(texto2.trim());

const oracionDividida = oracion.split(" ");
console.log(oracionDividida);

const numero = 22
console.log(typeof texto2 == "number" );
console.log(typeof numero == "number" );  
console.log(typeof texto2);

console.log("-------------");
console.log(texto2.trim().repeat(3));

console.log(texto2.trim().charAt(5));

console.log(texto2.trim().concat(", como estas?"));


console.log("-------------");
console.log("StartWith");
console.log(texto2.trim().startsWith("Hola"));
console.log(texto2.trim().startsWith("ola"));
console.log("EndWith");
console.log(texto2.trim().endsWith("Mundo"));
console.log(texto2.trim().endsWith("planeta"));

console.log("Includes");
console.log(texto2.trim().includes("ola"));
console.log(oracionDividida.includes("galletas"));

console.log("-------------");
console.log("Slice");
console.log(texto2.indexOf("a"));
console.log(texto2.trim().slice(texto2.trim().indexOf("a"), -1));
//                 0123456789
//                       und    
//                 Hola Mundo

