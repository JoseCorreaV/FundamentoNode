/*
un error rompe toda la ejecución del codigo
por lo cual es recomendale hacer un try - catch
*/

/*
const badfunction = () => 5 + z;
// si sabemos que se va a romper => try - catch
try {
    badfunction()
} catch (error) {
    console.log('bad function ha fallado')
    // .message muestra el error sin la ubicación
    console.error(error.message)
}
console.log('continuamos...')

/* RESULTADO

bad function ha fallado
z is not defined
continuamos...

*/


/* --------------- Asyncronia -------------------------- */

function seRompeAsync(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error asyncrona');
            cb(error);
        }
    })
}

try {
    seRompeAsync((error) => console.error(error.message))
} catch (error) {
    console.error('Vaya, algo se ha roto...')
    console.error(error.message)
}

/*  RESULTADO

Error asyncrona
z is not defined

*/