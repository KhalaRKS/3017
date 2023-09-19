// const objeto = {
//   atributo: "valor",
//   propiedad: "valor",
//   metodo: () => {}
// }

class Persona {
  constructor(nombre) {
    this.nombre2 = nombre;
  }

  presentarse() {
    return `Hola, me llamo ${this.nombre2}`;
  }
}

// const Juan = new Persona("Juan")
// const Juan = {
//   nombre2: "Juan",
//   presentarse: () =>`Hola, me llamo ${this.nombre2}`
// }

const Juan2 = new Persona('Juan');

// console.log(Juan.presentarse());
console.log(Juan2.presentarse());

class Usuario {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  login() {
    console.log('El usuario se logeo con exito!');
  }

  getToken() {
    return `${Math.random() + this.name}`;
  }
}

class Administrador extends Usuario {
  constructor(name, email) {
    super(name, email);
    this.isAdmin = true;
  }

  bloquearUsuario() {
    console.log('Fuiste bloqueado!');
  }
}

const Admin = new Administrador('Alba', 'asd@admin.net');
const Juan = new Usuario('Juan', 'juan@juan.net');
console.log(Admin);
Admin.bloquearUsuario();

// DER Diagramas de Entidad Relacion SQL

let nombre = new String('pepe');

nombre.charAt(nombre.length - 1);

String.prototype.findLastLetter = function () {
  return this.charAt(this.length - 1);
};

console.log('Alba'.findLastLetter());

// call/apply/bind

function showUserInfo(numeroPosteos, numeroLikes) {
  return `${this.name} tiene hecho ${numeroPosteos} posteos y tiene una cantidad de ${numeroLikes} likes.`;
}
console.log(showUserInfo.call(Juan, 5, 20,));

console.log('Apply');
console.log(showUserInfo.apply(Juan, [5, 20]));

const newFunction = showUserInfo.bind(Admin)

console.log(newFunction(20,5));
