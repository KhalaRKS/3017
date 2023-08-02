# Nucba-Students

## Funcionalidades del proyecto

En este proyecto estaremos codeando (en un lapso de dos clases) un flujo de registro, login, y logout utilizando Local y Session Storage.
Tendremos en el mismo 4 archivos html:

1. **index.html**: Funcionará de página de inicio de la app y no aplicaremos nada de lógica en este archivo.
2. **register.html**: Aquí se realizara todo lo relacionado a la validación del registro de un usuario.
3. **login.html**: Aquí se realizara todo lo relacionado a la validación de inicio de sesión de un usuario
4. **home.html**: Aquí unicamente tendremos que imprimir el nombre del user activo y la funcionalidad de logout.

En cuanto a las funcionalidades del proyecto, nos encontramos con los siguientes puntos:

1. REGISTRO:

- Utilizar el evento submit para validar el formulario al intentar registrarse.
- Utilizar el evento input para validar cada input en particular.
- Crear las funciones de error y success para el input y para el mensaje de error de abajo del input.
- Crear funciones utilitarias para aplicar luego en la validación de los campos (Acá entran los regex).
- Crear las funciones de validación de cada input.
- Crear una función que valide todos los campos a la vez, guarde el usuario en localstorage, muestre una alerta de para confirmar que se valido correctamente y nos redirija a la página de inicio de sesión para el evento submit.

2. LOGIN:

- Utilizar el evento submit para validar el formulario al intentar loguearse.
- Crear las funciones utilitarias necesarias para chequear si existe el usuario y matchea la contraseña con la registrada
- Crear la función que valide si lo ingresado en el formulario nos permite loguearnos
- Crear una función para guardar en el session storage
- Si todo sale bien, redirigirnos a la página de home.

3. Home:

- Recibir el usuario activo del SessionStorage
- Crear la función de logout
- Crear la función que muestre el nombre del usuario activo en la página

**Recomendamos utilizar la primera clase para todo lo relacionado a la página de registro, haciendo hincapie en la explicación de que son las expresiones regulares, como se usan, y en como se va validando cada campo. Luego, en la segunda clase, realizar lo que haya quedado pendiente de la página de registro, y la lógica de las páginas de login y home**

## Objetivos pedagógicos

Teniendo en cuenta que es el primer proyecto práctico que haremos en clase, se espera que:

- Que los alumnos entiendan que son las regex y como se usan sin entrar excesivamente en detalle sobre como crear una (explicarles que se pueden encontrar facilmente en internet).
- Se haga hincapie en como se van realizando las validaciones y como se dispara la función de error o exito según corresponda en base a dichas validaciones.
- Se explique la diferencia entre el array de usuarios y el usuario activo (Uno es una lista de objetos que tienen los datos de cada usuario y el otro es un objeto con el usuario que se logueo).
- Los alumnos vayan siguiendo y entendendiendo como es el traspaso de datos entre funciones(parámetros, retornos de cada función que se llame en otra, etc.).

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
