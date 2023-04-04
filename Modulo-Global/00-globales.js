//  !No hacer esto en producción!

// console.log(global) => la palabra clave global tienen muchas funciones.

// console.log(__dirname); => muestra la ubicación actual 

// require(); // nos va a permitir acceder a caulqueir módulo.

let i =0; //  Inicializo contador en cero
// la función setInterval es un cliclo infinito
let intervalo = setInterval(() => {  // Asigno el setInterval a una variable intervalo para poder operarla luego.
    console.log(" Hola again "); // Imprimo cada vez que se ejecute el intervalo
if (i === 3){ // Cuando i sea 3.
        clearInterval(intervalo); //  finalice la función => setInterval
    }
    i ++;
}, 1000);


// función que ejecuta de inmediato
setImmediate(()=>{
    console.log("imprime ya mismo")
})


/* global => RESULTADO
Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]  
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 61.91239994764328,
      nodeStart: 1.0728999972343445,
      v8Start: 11.203799962997437,
      bootstrapComplete: 52.57849997282028,
      environment: 28.50799995660782,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1679440717657.18
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]  
  }
}

*/
