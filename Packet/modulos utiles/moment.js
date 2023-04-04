// moment para trabajar con fechas
const moment = require('moment')

const ahora = moment();



// Para formatear una fecha
console.log(ahora.format('MM/DD/YYYY HH:MM A')+"\n"); //  fecha de hoy => 03/25/2023 14:03 PM 

// Para validad una fecha
console.log(moment('2020-04-11').isValid()+"\n"); // Nos dara **true** o **false** dependiendo de si la fecha es valida o no

// Para encontrar cuanto tiempo ha pasado hasta hoy
console.log(moment('2018-04-11').fromNow()+"\n"); // Hace 5 años

// Para agregar o eliminar años, días o meses
console.log(moment('2020-04-11').add(1, 'years')); // 2021-04-11
console.log(moment('2020-04-11').subtract(1, 'years')); // 2019-04-11