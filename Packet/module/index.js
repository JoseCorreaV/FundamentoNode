// traer modulo
const myOwnModule = require('./myOwnModule');

// .property1 es la variable definida en otro archivo
console.log(myOwnModule.property1); //

// .property2 es la variable definida en otro archivo
console.log('Property 2 value (number): ', myOwnModule.property2);
myOwnModule.sayHello();