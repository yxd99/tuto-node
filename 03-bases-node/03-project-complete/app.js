const { crearArchivo } = require('./helpers/multiplicar');
const yargs = require('./config/yargs');

crearArchivo(yargs.b, yargs.l)
    .then(value => console.log(value))
    .catch(error => console.log(error))