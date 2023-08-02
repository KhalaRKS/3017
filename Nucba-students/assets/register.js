const registerForm = document.getElementById('register-form');
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');

// Nos traemos los usuarios del localstorage

const users = JSON.parse(localStorage.getItem('users')) || [];

// Función para ghuardar los usuarios en el localStorage

const saveToLocalStorage = () => {
  localStorage.setItem('users', JSON.stringify(users));
};

// Función para chequear si el campo esta vacio (input)
const isEmpty = (input) => {
  return !input.value.trim().length;
};

// Función para determinar si el largo del value del input esta entre un minimo y un maximo de caracteres
const isBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length < max;
};

// Función para validar una dirección de email con expresión regular
const isEmailValid = (input) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(input.value.trim());
};

// Función para chequear si el mail ya existe en el array de usuarios
const isExistingMail = (input) => {
  return users.some((user) => user.email === input.value.trim());
};

// Función para validar una constraseña con expresión regular
const isPassSecure = (input) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  return re.test(input.value.trim());
};

// Función para validar el telefeno con expresión regular
const isValidPhone = (input) => {
  const re = /^[0-9]{10}$/;
  return re.test(input.value.trim());
};

// Función para mostrar error al validar un input

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.style.display = 'block';
  error.textContent = message;
};

// Función para mostrar un input como valido

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  const error = formField.querySelector('small');
  error.textContent = '';
};

// Función para validar un input de tipo texto

const checkTextInput = (input) => {
  // setear la validez del value a retortnar
  let valid = false;
  const minCharacters = 3;
  const maxCharacters = 25;

  if (isEmpty(input)) {
    showError(input, 'Este campo es obligatorio');
    return;
  }

  if (!isBetween(input, minCharacters, maxCharacters)) {
    showError(
      input,
      `Este campo debe tener entre ${minCharacters} y ${maxCharacters} caracteres`
    );
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Función para validar si el input email es valido

const checkEmail = (input) => {
  // setear la validez del value a retortnar
  let valid = false;

  if (isEmpty(input)) {
    showError(input, 'El email es obligatorio');
    return;
  }
  if (!isEmailValid(input)) {
    showError(input, 'El email no es valido');
    return;
  }

  if (isExistingMail(input)) {
    showError(input, `El email ya se encuentra registrado`);
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// función para validar el input de la contraseña

const checkPassword = (input) => {
  // setear la validez del value a retortnar
  let valid = false;

  if (isEmpty(input)) {
    showError(input, 'La contraseña es obligatorio');
    return;
  }
  if (!isPassSecure(input)) {
    showError(
      input,
      'La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un simbolo'
    );
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Función para validar el input del telefono

const checkPhone = (input) => {
  // setear la validez del value a retortnar
  let valid = false;

  if (isEmpty(input)) {
    showError(input, 'El telefono es obligatorio');
    return;
  }
  if (!isValidPhone(input)) {
    showError(input, 'El telefono no es valido');
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Función general

const validateForm = (e) => {
  e.preventDefault();
  // guardar el estado de los inputs en variables
  let isNameValid = checkTextInput(nameInput);
  let isLastNameValid = checkTextInput(lastNameInput);
  let isEmailValid = checkEmail(emailInput);
  let isPasswordValid = checkPassword(passInput);
  let isPhoneValid = checkPhone(phoneInput);

  let isValidForm =
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isPhoneValid;

    if(isValidForm){
        users.push({
            name: nameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            password: passInput.value,
            phone: phoneInput.value
        })
        saveToLocalStorage(users)
        alert("Te has registrado con exito!")
        window.location.href = "login.html"
    }
};


const init = () =>{
    registerForm.addEventListener("submit", validateForm)
    nameInput.addEventListener("input",()=> checkTextInput(nameInput))
    lastNameInput.addEventListener("input",()=> checkTextInput(lastNameInput))
    emailInput.addEventListener("input",()=> checkEmail(emailInput))
    passInput.addEventListener("input",()=> checkPassword(passInput))
    phoneInput.addEventListener("input",()=> checkPhone(phoneInput))
}

init()