// importar el paquete
const bcrypt = require("bcrypt");

// variabre string pwd
const password = "NuncaParesDeAprender2023";

// cifrar la password + cantidad de veces que cambia el texto a una
// cadena de caracteres + función
bcrypt.hash(password, 5, function(err, hash){
	// hash => es el codigo que se creo
    console.log(hash)

    // para comparar la password con el hash
    bcrypt.compare(password, hash, function(err, res){
        console.log(res)
       // console.log(error)
    })
});
// La consola nos entregaria una contraseña distinta en cada oportunidad.

// Nos va a responder **true**
// *(en el result)* o **false** 
//*(en el error)* dependiendo si la contraseña puede generar el hash