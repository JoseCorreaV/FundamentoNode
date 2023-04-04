
//no se hace, ya que process pertenece los modulos globales, que ya vienen con node
//const process = require('process');

//el proceso esta por terminar
process.on('beforeExit', () => {
    console.log('El proceso ya casito termina');
})
//el proceso ha terminado

//console.log(process.on('uncaughtException'));
//promesas que se han rechazados
// 
//funcionQueNoExiste();
// si hacemos una función que no existe
// rompe la ejecución y lo de abajo no se compila
//console.log('esto no sale')


process.on('exit', () => {
    console.log('El proceso termino');
    setTimeout(() => {
        console.log('este mensaje es invisible');
    }, 500);
})

setTimeout(() => {
    console.log('este mensaje es totalmente visible');
}, 500);
