const http = require ("http") // importamos el modulo
// es recomenado no inicializar la funcion aquñi por los callbacks
http.createServer( router ).listen(3000); // definimos ponemos el puerto

function router(req,res){ // se le da 2 parametros request y response
	console.log("nueva peticion") 
	console.log(req.url) // immprimimos la url de la petición
	
	switch (req.url) {
		case '/hola': // si añadimos => /hola a => localhost:3000
		let saludo = hola();
		res.write('\n'+hola+ req.url);
		res.end();
		break;

		default:
		res.write('\n Error 404');
		   res.end();
		}
		

	// // // escribir en la cabezara  --> se ve desde desarrollador 
	// res.writeHead(201, {'Content-Type': 'text/plain'}); // codigo de autenricación 	
	// //escribir respuesta al usuario
	// res.write("Prueba HTTP de node.js")
	
	// // // tipo de contentido
	// res.end() // terminamos la petición

} 

function hola(){

	return 'hola que hace';
}

console.log("escuchando en localhost:300 \n") 
