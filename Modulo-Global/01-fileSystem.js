const fs = require('fs'); // traer un modulo o archivo en node.js


/*                      LEER ARCHIVO

function leer(ruta, imprime) {
    // .readFile => para leer un modulo o archivo
    fs.readFile(ruta, 
        // función 
        (err, data) => {
            // Archivo leido
        imprime(data.toString()); 
       // data.toString() => convierte la información en string
   // console.log(data); // => imprime el archivo en Bytes
    })
} 
// leer(__dirname + '/Archivo.txt', console.log); // imprime el archivo

*/ 
//  -----------------------------------  //
/* 

function escribir(ruta, contenido, muestra) {
    fs.writeFile(ruta, contenido, 
        // la función es la que muestra la información
        function (err) {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente');
        }

    });
}

escribir(__dirname + '/Archivo1.txt', 'This is the contenido', console.log); // crea un archivo
*/


// -------------------------------------------- //
function borrar(ruta, cb) {
    // .unlink => función que permite eliminar un archivo
    fs.unlink(ruta, cb);
}
borrar(__dirname + '/Archivo1.txt', console.log); // elimina un archivo.