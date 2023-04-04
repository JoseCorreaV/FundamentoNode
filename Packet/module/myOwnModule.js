function sayHello() {
    console.log('Hello from inside a function of myOwnModule.js');
}

const property1 = 'Este es un string del archivo MyOwnModule';
const property2 = 2;


// exportar la función y variables si es el caso
module.exports = {
    sayHello, property1, property2
}
