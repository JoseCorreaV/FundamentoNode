/*

El módulo de procesos secundarios de Node.js 
(child_process) tiene dos funciones spawn y exec, 
mediante las cuales podemos iniciar un proceso 
secundario para ejecutar otros programas en el sistema.

La diferencia más significativa entre child_process.spawn 
y child_process.exec está en lo que spawn devuelve un 
stream y exec devuelve un buffer.

Usa spawn cuando quieras que el proceso hijo devuelva 
datos binarios enormes a Node.

Usa exec cuando quieras que el proceso hijo 
devuelva mensajes de estado simples.

Usa spawn cuando quieras recibir datos desde 
que el proceso arranca.

Usa exec cuando solo quieras recibir datos al final de la ejecución.





// acceder a mas de una propiedad de => child_process
const {exec} = require('child_process');

// listar directorio => dir
exec('dir', 
// dir => puede ser remplazado por cualquier otro comando
// example => 
(err, stdout, sterr) => {
    if (err){
        // si exite un error, ejecute este if
        console.error(err);
        return false;
    }
    console.log('No hubo error'+stdout);
})

  RESULTADO

No hubo error El volumen de la unidad D es DOCUMENTOS
 El n�mero de serie del volumen es: 0865-AE6C

 Directorio de D:\Documentos\platzi\Fundamento de Node\Modulo-Global

22/03/2023  07:32 p.�m.    <DIR>          .
22/03/2023  07:32 p.�m.    <DIR>          ..
21/03/2023  06:41 p.�m.             1.732 00-globales.js 
21/03/2023  07:23 p.�m.             1.298 01-fileSystem.js
22/03/2023  07:01 p.�m.             3.013 02-consola.js  
22/03/2023  07:30 p.�m.               995 03-errores.js  
22/03/2023  07:49 p.�m.             1.067 04-procesos-hijo.js
21/03/2023  06:47 p.�m.               695 Archivo.txt    
21/03/2023  07:18 p.�m.                21 Archivo1.txt   
               7 archivos          8.821 bytes
               2 dirs  955.642.830.848 bytes libres      



*/

// --------------------------------------------- //

// spawn => permite invocar un proceso nuevo de node.js
const  { exec, spawn } = require('child_process');
// los parametros adicionales van en el array => 'one process',['other process']
let proceso = spawn('cmd.exe', ['/c','dir']);

// proceso + .pid(identificador del procceso)
console.log(proceso.pid);
// saber si el proceso esta conectado
console.log(proceso.connected);

proceso.stdout.on('data', function(data){
    // para ver la información del proceso parameter.toString()
    console.log(data.toString()); // imprime los archivos que estan en la carpeta module-global
});

// detectar cuando acaba el proceso
proceso.on('exit', function(){
    // mata el proceso acá
    console.log('Se murio:c');
    console.log(proceso.killed); 
});
