
function hola(nombre) {
    // promesa que contendra un callback
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, '+ nombre);
            // palabra clave => si es verdadero
            resolve(nombre);
        }, 1500);
    });

    
}

function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            resolve(nombre);
             // reject('Hay un error'); // salta al error
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    });
}




// ---

console.log('Iniciando el proceso..');
hola('Alejandro')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
 // por si falla
    .catch(error => { // captura el los reject
        console.error('Ha habido un error:');
        console.error(error);
    })


/* 
CallBack => 

Promesas =>


*/