// -------- LECTURA ---------------//

const fs = require('fs');
const stream = require('stream');
const util = require('util');


let data = '';
let lea_Stream = fs.createReadStream(__dirname+ '/input.txt');
// para escribir en español con caracteres
lea_Stream.setEncoding('utf-8');

// // escuhar el evento
// lea_Stream.on('data', function (ch){
//     // si es muy pequeña
//    // console.log(ch);
//    // si es mucha información
//    data += ch;
// }) 

// lea_Stream.on('end', function(){
//     console.log(data);
// })

/* RESULTADO
Trae el contenido del archivo
*/

// -------- ESCRITURA ---------------//

// escribir en buffer
// .stdout es un buffer de escritura 
// process.stdout.write('hola')
// process.stdout.write('q')
// process.stdout.write('hace')

// -------- modificar, recibirlo y escribirlo ---------------//
const Transform = stream.Transform;

function Mayus(){
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(ch, codif, call){
 chunkMayus = ch.toString().toUpperCase();
  this.push(chunkMayus);
  call();
}

let mayus = new Mayus();

lea_Stream
 .pipe(mayus)
 .pipe(process.stdout)