const puppeteer = require('puppeteer');

// esta es la pagina a abrir
const link = 'https://platzi.com/blog/que-es-platzi-master/';

// () lo que va a dentro se convierte en una expresión
// no hace nada pero al hacer async se pueden utilizar los await

(async function browser() {
    console.log('Abrimos chromium')
    const browser = await puppeteer.launch({headless: false})//lanzamos el navegador para ver lo que pasa

    // abrir una pagina para poder ver algo
    const page = await browser.newPage()
    await page.goto(link)
 

    // trae los comentarios de la pg web y lo imprime en consola
    const commentsText = await page.evaluate(() => {
        // en todos los archivos de la web trae el .CommentContent-text p
        const comments = document.querySelectorAll('.CommentContent-text p')
        // crea un array con la función, que almacena cada uno de los comentario y los envia
        const listOfComments = []
        comments.forEach(comment => {
            listOfComments.push(comment.innerHTML)
        })

        // se retorna los comentarios
        return listOfComments
    })

    browser.close() // cerrar navegador despues de hacer toda la operación

    console.log(commentsText) // trae los comentarios
})();
