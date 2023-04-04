//La asincronia se puede generar mediante en setTimeout
function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola => '+ nombre); // 
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios --', nombre);
         otroCallback();
        }, 1000);// 
}

console.log('...Iniciando proceso...'); 

hola('Alejandro', function (nombre) {
    adios('> '+nombre, function () {
    console.log('...Terminando proceso...'); 
});
});
/*
Resultado 
...Iniciando proceso...
Hola => Alejandro
Adios -- > Alejandro
...Terminando proceso...
*/

/*
hola('Alejandro', function () {});
adios('> Alejandro', function () {});

Resultado
...Iniciando proceso...
Adios -- > Alejandro
Hola => Alejandro 

*/











/* console.log('text .. Iniciando proceso...'); // 1

function soyAsincrono(elCallback) {
    console.log("Asigno setTimeout para volver asincrona una función \n \n"); // 2
    
    setTimeout(function(){
    console.log("\n\nPasaron 3 segundos y me ejecuté \n\n"); // 5
     // llama el parametro   
    elCallback();
}, 3000)

};

soyAsincrono(function(){console.log("Después de esto demuestro que Soy el primer Callback")}); // 6



function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, '+ nombre); // 3
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {console.log('Adios', nombre); otroCallback();}, 5000);// 8
}
hola('Alejandro', function (nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso...'); // 9
    });
});



hola('Alejandro estás probando  "hola" las funciones independientemente, las pasas vacías', function () {}); // 4
adios('Alejandro estás probando "adios" las funciones independientemente, las pasas vacías', function () {});// 7

*/