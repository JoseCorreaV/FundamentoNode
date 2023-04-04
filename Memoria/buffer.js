// crear baffer
// .alloc(1) => guardar la posición 1 en memoria
//let buffer = Buffer.alloc(1);
//console.log(buffer); // <Buffer 00>
// -----------------------------------  //

// .from([]) => 
// let buffer = Buffer.from([4,5,6]);
// console.log(buffer);// <Buffer 04 05 06>

// -------------------------------------//


// .from([]) => 
// let buffer = Buffer.from('jo');
// console.log(buffer.toString());// jo


// _--------------------------------//

// los 26 letras del abc
let abc = Buffer.alloc(26);
for (let i = 0; i< abc.length; i++){
    // acada posición del buffer le agrega una numer
   // 97 de codigo ascii
    abc[i] = i + 97;
  }
  
  console.log(abc);
  console.log(abc.toString()) // abcdefghijklmnopqrstuvwxyz