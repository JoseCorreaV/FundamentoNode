//La asincronia se puede generar mediante en setTimeout
function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola => '+ nombre); // 
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios --> ', nombre);
         otroCallback();
        }, 1000);// 
}

// ------------------ //

function conversacion(nombre, veces, callback) {
   
    if (veces > 0) {
        hablar(function () {
           // recursividad con la misma función
           // -- => -1 
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

// --

console.log('Iniciando proceso...');
hola('Aleajandro-sin', function (nombre) {
    conversacion(nombre, 10, function() {
        console.log('Proceso terminado');
    });
});


/****************HELL**********************/
// hola('Alejandro', function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function() {
//                     console.log('Terminando proceso...');
//                 });
//             });
//         });
//     });
// });







