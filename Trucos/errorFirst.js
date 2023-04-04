// primer error con try catch

function asincrona(callback) {
    setTimeout(() => {
        try {
        // como buena practica pasar SIMPRE pasar el parametro de error y luego lo que funciona.
            let a = 3 + w
            callback(null, a);
        // esto fallara
        
        } 
        // en caso de que no se rompa
        catch (error) {
            callback(error)
        }
    }, 1000)
}

asincrona((err, dato) => {
    // primero ejecutar si existe un error.
    if (err) {
        console.error('Tenemos un error')
        console.error(err)
        return false

        // throw err => para lanzar el error directamente
    }

    console.log(`Todo ha ido bien, mi dato es ${dato}`)
})