const loginForm = document.getElementById('login--form');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const errorMessage = document.getElementById('form__error');

// Nos traemos los usuarios del localstorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Función para guardar el usuario en el sessionStorage
const saveToSessionStorage = (user) => {
  sessionStorage.setItem('activeUser', JSON.stringify(user));
};

// Función para chequear si el campo esta vacio (input)
const isEmpty = (input) => {
  return !input.value.trim().length;
};

// Función para chequear si el mail ya existe en el array de usuarios
const isExistingMail = (input) => {
  return users.some((user) => user.email === input.value.trim());
};

// Función para mostrar el error al validar el formulario
const showError = (message) => {
  errorMessage.textContent = message;
};
// Función para recoger al usuario en caso que exista
const getUser = () => {
   return users.find((user) => user.email === emailInput.value.trim());
}
// Función para validar si la passwor dingresada coincide con la registrada para ese mail
const isMatchingPass = (input) => {
  const user = getUser()
  return user.password === input.value.trim(); //''
};


// funcion para validar el formulario de login

const isValidAccount = () => {
  let valid = false;

  if (isEmpty(emailInput)) {
    showError('Por favor, complete los campos');
    return;
  }
  if (!isExistingMail(emailInput)) {
    showError('El email ingresado es incorrecto');
    return;
  }
  if (isEmpty(passInput)) {
    showError('Por favor, complete los campos');
    return;
  }
  if (!isMatchingPass(passInput)) {
    showError('Los datos ingresados son incorrectos');
    loginForm.reset();
    return;
  }
  alert('Ya estas en linea!');
  valid = true;
  errorMessage.textContent = '';

  return valid;
};

// funcion para loguar al usuario

const login = (e) => {
    e.preventDefault()
    if(isValidAccount()){
        const user = getUser()
        saveToSessionStorage(user)
        window.location.href = "./home.html"
    }

}

const init = () =>{
    loginForm.addEventListener("submit", login)
}

init()

// Exitoso!