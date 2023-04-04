const gulp = require("gulp");
// para una servidor
const server = require("gulp-server-livereload");


// la tarea hace que me imprima un console log
gulp.task("build", function (cb) {
    // build => el console.log
  console.log("Construyendo el sitio");
  setTimeout(cb, 1200);
});

// ------------- //
/* para poder llamarlo se debe configurar el script en  package.json
   "uild":"gulp-(variable)- build"

   y para poder ejecutar la tarea
   en la consola digitamos:
     npm run build


   */
// ------------- //b

// Para ejecutar el server y abrir
gulp.task("serve", function (cb) {
// abrir el html de la carpeta www
  gulp.src("www")
  // metodo async del server
.pipe(server({
      livereload: false,
      open: true,
    }));

});