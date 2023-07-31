const taskInput = document.querySelector(".input-text");

const addForm = document.querySelector(".add-form");

const tasksContainer = document.querySelector(".tasks-list");

const deleteAllBtn = document.querySelector(".deleteAll-btn");

// Definir la lista de tareas []
//               ======================================
//                    '[{name: task1, id: 2}]' || []
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

// Funcion que guarda en el localstorage el array de tareas
const saveLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(taskList));
};

// Funcion que crea el HTML de una tarea
const createTask = (task) => {
  const { name, id } = task;
  return `<li>${name}<img class="delete-btn" src="./img/delete.svg" alt="boton de borrar" data-id="${id}"></li>`;
};
//           graficar | dibujar
// Funcion que renderiza la lista de tareas
const renderTaskList = () => {
  tasksContainer.innerHTML = taskList.map((task) => createTask(task)).join("");
};

// Función que oculta o muestra el boton de borrar todas las tareas.
//                    [{name: task1, id: 2}] || []
const toggleDeleteAllButton = () => {
  if (!taskList.length) {
    deleteAllBtn.classList.add("hidden");
    return;
  }
  deleteAllBtn.classList.remove("hidden");
};

// Función que convierte el valor del taskInput en un string sin espacios al princio y al final.
// sacarle multiespacios     "      Lavar           Los Platos       "

const correctInputValue = () => {
  return taskInput.value.trim().replace(/\s+/g, " ");
};

// Función que verifica si la tarea ingresada es válida (no esta vacia y no esta repetida)

// TypeScript 

const isValidTask = (taskName) => {
  let isValid = true;
  if (!taskName.length) {
    alert("Por favor, ingrese una tarea");
    isValid = false;
  } else if (
    //            case sensitive    n != N    "Lavar" || "lavar"
    taskList.some((task) => task.name.toLowerCase() === taskName.toLowerCase())
  ) {
    alert("Ya existe una tarea con ese nombre");
    isValid = false;
  }
  return isValid;
};

// Función que agrega una tarea al array de tareas.

const addTask = (e) =>{
    e.preventDefault();
    const taskName = correctInputValue()
    if(isValidTask(taskName)){
        taskList = [...taskList, {name: taskName, id: Date.now()}]
        addForm.reset()
        renderTaskList()
        saveLocalStorage()
        toggleDeleteAllButton()
    }
}

// Función remover una tarea del array de tareas

const removeTask = (e) =>{
    if(!e.target.classList.contains("delete-btn")) return;
    const filterId = Number(e.target.dataset.id)
    // Filtrando todas las tareas que no sean iguales al filterId
    // filterId = 1 ---      [1,2,3,4,5] = [2,3,4,5]
    taskList = taskList.filter((task) => task.id !== filterId)
    renderTaskList()
    saveLocalStorage()
    toggleDeleteAllButton()
}

// Función que borra todas las tareas del array de tareas

const removeAll = () =>{
    taskList = []
    renderTaskList()
    saveLocalStorage()
    toggleDeleteAllButton()
}

// Función inicializadora de la app

const init = () =>{
    document.addEventListener("DOMContentLoaded", renderTaskList)
    addForm.addEventListener("submit", addTask)
    tasksContainer.addEventListener("click", removeTask)
    deleteAllBtn.addEventListener("click", removeAll)
    document.addEventListener("DOMContentLoaded", toggleDeleteAllButton)
}

init();



