// repaso

const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 50,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Aceitunas",
      "Ajo",
      "Albhaca",
      "Oregano",
    ],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
// Destructuración

/*
    Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
*/
// 1
pizzas.forEach((pizza) => {
  console.log("La " + pizza.nombre + " tiene: ");
  pizza.ingredientes.forEach((ingrediente) => {
    // 2
    console.log(ingrediente);
  });
});

// 1 forEach
// 2 for
// 3 while

for (let i = 0; i < pizzas.length; i++) {
  const pizza = pizzas[i];
  const { ingredientes } = pizza;

  console.log("La " + pizza.nombre + ", tiene: ");
  for (let j = 0; j < ingredientes.length; j++) {
    const ingrediente = ingredientes[j];
    console.log(ingrediente);
  }
}

const { nombre, precio } = pizzas[0];

const pizzaNueva = { ...pizzas[0], nombre: "pizza de Prueba" };

const pizzasNuevas = [
  ...pizzas,
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },
];

//     pizza1 = pizzas[0]
//     pizza2 = pizzas[1]

const [pizza1, pizza2] = pizzas

console.log(pizzasNuevas);
