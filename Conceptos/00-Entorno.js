
let nombre = process.env.NOMBRE || 'Sin nombre'; 
let web = process.env.MI_WEB || 'no tengo web';

console.log('Hola '+ nombre);
console.log('Mi web es '+ web);

// Me retornara { Hola Sin nombre, mi web es => no tengo web} ya que tiene  la expresión OR || me asigna estas variables por defecto

// Para que las variables de entorno me tomen valores puedo hacer varias cosas:

//+  Desde la terminal asignarle las variables antes del codigo:

// NOMBRE=Alejandro MI_WEB=123QWERTY APIKEY=10937472 node Conceptos/entorno.js => INUX
/* $env:NOMBRE="Carlos" => Intro y lugo ejecutar => node Conceptos/00-Etorno.js */

/*  RESULTADO
Hola Carlos                           Node> $env:NOMBRE="Carlos" node Conceptos/Entorno.js
Mi web es no tengo web
*/

