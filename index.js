//concepto general de Node js yNPM
// sistema donde se puede ejwcutar javascript
// no se recomienda descargar la ultima version sino la que es la mas estable
//el navegar es capas de ejecutar cosas que el navegador no.
// el mkodulo http, es el modulo con el que se levantan los sitios
//tiene un monton de paquetes que n os permiten trabajar con archivos de texto plano
//el modulo http, tiene comando y levantar servidores y se trabaja el backend
//

//NPM 
//repositorio de modulos, paquetes de node.
// podemos encontraar sweet alert por ejemplo. genera nombres aleatorios.
//abrimos la terminal, si no tenemos puesta la carpeta poenem os $ cd y el nombre la carpeta donde nos queremos ubicar
// una vez que le damos enter ponemos npm init
// nos va a preguntar que nombre le queremos poner al archivo o trabajo o sino por defecto pondre el de la crpeta
// te dice la version
// nos pide descripcion
//el archivo de entrada
//los comandos
// el repositorio de git hub ligado al proyecto
// y un monton de informacion, si esa informacion esta ok, le doy enter, se crea un paquete.
//package.json
// este package.json trae la informacion del proyecto

// {
//     "name": "framewors-nodejs",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "",
//     "license": "ISC"
//   }
  
//podemos instalar muchas cosas por ejemplo nodemon, por ejemplo se usa mucho para backend
// es para estar escuchando simpre un archivo, siempre atento a cualquier peticion que le estemos diciendo
// copiamos el comando: npm i nodemon
// una vez que instalemos esto, en el package.son, se nos va a genear un paquete mas.


// {
//     "name": "framewors-nodejs",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//       "nodemon": "^3.1.7"
//     }
//   }

//tambien se nos crearon otras carpetas aparte como package-lock.json y node.modules
//package-lock.json son la informacion de las versiones que se utilizan, solo del programa.
//el node.modules es donde se va a guardar todo lo que vamos haciendo en el codigo, esto no se tiene que subir 
// al repositorio, ya que es muy pesado, para no subirlo lo que tenemos que hacer es

// creamos un archivo gitignore evita lo que no queremos que se suba al repositorio.
// entonces escribimos en la solapa de .gitignore node_modules y asi no se va a subir


// en el package-lock.json existen los scripts, que hacemos con estos??
// por ejemplo creamos uno que se llame= " start": "nodemon index.js" 
// lo que le acabamos de decir este que este atendto al index.js todo el tiempo
//y en la consola/termial hago npm start va a escuchar todo el tiempo y si hacemos un console.log de hola va a salir por la terminal.


// PS C:\Users\gauna\OneDrive\Escritorio\clases-javaScript\framewors-nodejs> npm start

// > framewors-nodejs@1.0.0 start
// > nodemon index.js

// [nodemon] 3.1.7
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node index.js`


// console.log("hola");


// hola
// [nodemon] clean exit - waiting for changes before restart

// acaba de escuchar lo que hicimos
 // y si hacemos algo mal nos va a decir que hy un error

//  Node.js v20.11.0
// [nodemon] app crashed - waiting for file changes before starting..


// si lo corregimos va a salir bien otra vez, mientras este elerror se va a crayear

//  console.log("hola");
 
// [nodemon] starting `node index.js`
// hola
// entonces el backend esta pendiente simpre, ante cualquier error.

// ahora vamos a ña documentacion y buscamos random-messages-random y instalamos
//npm i random-messages-random

//una vez instalado ya lo tenemos en el proyecto, es para generar mensajes aleatorios
// vamos a ñla documentacion y de ahi al resopitorio de git
// y ahi nos va a decir que para usarlo lo que tenemos que hacer.
//copiamos el used



// const { randomMsg } = require("random-messages-random");

// console.log(randomMsg());

//si ejecutamos esto lo que nos va a dar en consola son nombres:
//diego, laura.

//Librerias y frameworks mas populares de javascrip para desarrollar frontend son:
// react js, angular y vue js, el mas popular es react js
//SPA single page aplication, ayuda a que las aplicaciones sean mas optimas.
//todo es renderizados por funciones asyncronas, se van cargando informacion por el backen.
//evita que tenga mucho html. es una forma de desarrollo, arquitectura de una plataforma.
//router, camino de la peticion, renderisa de forma mas dinamica.
//mvc modelo de vista controlador, la parte logica de gestionar eventos y la comunicacion
 // usuario, vista, controlador y modelo
 // usuario accion , la vista pasa datos el controlador y lo pasa el modelo, y vuelve.
 // trabajann conn compnentes, cuando se unen conforman una unidad funcional.
 //

 // angular tiene 14 versiones fue lanzado por google y fue creado en 2010. permite desarrollar una aplicacion completa.
 //react tinen 18 versiones fue creado por fscebook y se creo en el 2013 y es muy personalizados, y se puede armar una aplicacion completa.
 //vue























