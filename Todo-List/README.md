# To Do List

## Funcionalidades del proyecto

En este proyecto estaremos codeando una lista de tareas que tendrá las siguientes funcionalidades:

- Agregar una tarea a la lista mediante un form
- Validar si el input está vacío
- Validar si la tarea ya existe
- En caso de pasar las validaciones, creamos y renderizamos la tarea
- Guardar las tareas en el localStorage para persistir la lista
- Hacer aparecer/desaparecer el boton de borrar todas según corresponda
- Borrar cada tarea particular
- Borrar todas las tareas juntas

**Recomendamos dejar para el final todo lo relacionado a guardar datos en el localStorage y agregarlo una vez que la app ya este hecha, para poder mostrar la necesidad de poder guardar las tareas en algún lado.**

## Objetivos pedagógicos

Teniendo en cuenta que es el primer proyecto práctico que haremos en clase, se espera que:

- Se les explique con detenimiento a los alumnos cada paso del renderizado dinámico de los elementos con los datos que se reciben del form y el agregado del id.
- Se remarque que elemento es el que esta recibiendo el evento submit (el form) para que quede claro que elemento es el que dispara el evento.
- Se haga hincapie en el uso de dataset y se explique (Se va a usar mucho en proyectos siguientes)
- Los alumnos vayan siguiendo y entendendiendo como es el traspaso de datos entre funciones(parámetros, retornos de cada función que se llame en otra, etc.).
- Algunos event listeners, como el del borrado individual de tareas, están aplicados al contenedor en lugar de a cada tarea. Explicar que esto se debe a que como las tareas se van creando y no queremos agregar el event listener a cada tarea, se lo asignamos a su contenedor padre y hacemos el chequeo de la clase del elemento clickeado para validar que el click se haga en donde queremos que se ejecute el evento, y que retorne sin hacer nada en caso de que no la tenga.
- Se explique en detalle como es el funcionamiento del localStorage (Que es el tema principal de la clase).

## Modalidad de trabajo

- El mentor tiene todo el proyecto ya codeado en la rama "template/mentor". No es necesario que siga el orden planteado, pueden reorganizarlo y plantearlo de la manera que ustedes lo crean mas adecuado para que el alumno entienda lo que se le esta explicando.

- Si consideran que pueden cambiar algo para mejorar el proyecto pueden hacerlo, siempre y cuando siga cumpliendo los mismos objetivos.

- A medida que van codeando, vayan mostrandole a los alumnos como van cambiando las cosas y porque se hace lo que se hace. Idealmente, haganlos razonar y participar para que entiendan mejor la resolución de las distintas problematicas que se van presentando.

**Es FUNDAMENTAL que revisen el proyecto con tiempo y lo lleven a la practica antes de codearlo en clase, con el fin de que no se presenten inconvenientes a la hora de codearlo en vivo y de que, en caso de que tengan alguna duda sobre la realización del proyecto, podamos asistirlos desde el equipo.**

## División del repositorio

El proyecto esta dividido en distintas ramas las cuales detallamos a continuación.

| Rama            | Descripción                                                      |
| --------------- | ---------------------------------------------------------------- |
| clase           | Base para la clase - Desde aca vamos a partir para el livecoding |
| template/mentor | Proyecto completo para el profesor                               |

- El profesor clonará por un lado la rama "clase" para utilizar de base para codear en la clase y por el otro la rama "template/mentor" para tener de referencia a la hora de ir codeandola.

- En la rama "template/mentor" tendrán el proyecto codeado en su totalidad. Cada función y variable estará acompañada de su respectiva explicación.

**Recuerden eliminar el README.md antes de subir el proyecto para los alumnos**
