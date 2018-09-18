const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .catch(error => console.log(error));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${colors.green(archivo)} fue creado con exito`))
            .catch(error => console.log(error));
        break;

    default:
        console.log('Comando no reconocido');
}