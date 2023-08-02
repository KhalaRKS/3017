const logoutBtn = document.getElementById('logout-message');
const userName = document.getElementById('user-name');

// Nos traemos el usuario del sessionStorage
const activeUser = JSON.parse(sessionStorage.getItem("activeUser"))


// función para mostrar el nombre y apellido del usuario activo

const showUserName = () =>{
    userName.textContent = `${activeUser.name} ${activeUser.lastName}`
}


// Función de logout

const logout = () => {
    if(window.confirm("¿Estas seguro que deseas cerrar sesión?")){
        sessionStorage.removeItem("activeUser")
        window.location.href = "../index.html"
    }
}


const init = () =>{
    showUserName()
    logoutBtn.addEventListener("click", logout)
}



init()