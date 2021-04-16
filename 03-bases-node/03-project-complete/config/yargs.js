const yargs = require('yargs')
    .options({
        'b': {
                alias: 'base',
                demandOption: true,
                type: 'number',
                describe: 'El número que desea generar la tabla.'
            },
        'l': {
                alias: 'listar',
                demandOption: false,
                default: false,
                type: 'boolean',
                describe: 'Si desea mostrar la tabla en consola.'
            },
        'h': {
            alias: 'hasta',
            demandOption: false,
            default: 10,
            type: 'number',
            describe: 'Hasta que número desea que se imprima.'
        }
    })
    .check( (argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base debe ser un número.';
        }
        if(isNaN(argv.h)){
            throw `El valor ${ 'hasta'.red } debe ser un numero.`;
        }
        if(argv.b > 100){
            throw 'La base debe ser menor a 100.';
        }
        if(argv.h < 0 || argv.h > 100){
            throw `El valor ${ 'hasta'.red } debe ser superior a ${ '1'.green } e inferior a ${ '150'.green }.`;
        }
        return true;
    })
    .argv;

module.exports = yargs;