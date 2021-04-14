const yargs = require('yargs')
    .options({
        'b': {
                alias: 'base',
                demandOption: true,
                type: 'number',
                description: 'El número que desea generar la tabla.'
            },
        'l': {
                alias: 'listar',
                demandOption: false,
                default: false,
                type: 'boolean',
                description: 'Si desea mostrar la tabla en consola.'
            }
    })
    .check( (argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base debe ser un número.';
        }
        return true;
    })
    .argv;

module.exports = yargs;