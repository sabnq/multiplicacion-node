const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprmir tabla de multiplicar por consola', opciones)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}