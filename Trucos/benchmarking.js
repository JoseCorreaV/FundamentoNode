// ejecutar procesos muy largos y saber cuanto carga

let suma = 0
// comienza el tiempo de ejecución
console.time('bucle')
for (let i = 0; i < 1000000; i++) {
    suma += 1;
}
// para saber cuando termina
console.timeEnd('bucle') //  6.111msn => milisegundo lo que se tarda el bucle


// ------- Asyncrona  ------ //

console.time('bucle async')
console.log('Empieza el proceso asincrono')
asincrona()
    .then(() => console.timeEnd('bucle async')) // bucle async: 5.872ms

function asincrona() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('Terimina el proceso asíncrono')
            resolve()
        }, 0)
    })
}