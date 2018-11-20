// Tipos de require
// const fs = require('fs'); // fs = filesystem es un modulo nativo de node.
// const exp = require('express'); // Express es un modulo externo a node.
// const na = require('./nom-archivo'); // Forma de incluir archivos propios del proyecto.

const argv = require('./config/yargs').argv;
const colors = require('colors');
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');

// let base = 108;
// let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        // .then(lista => console.log(lista))
        // .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.cyan(archivo) }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no encontrado'.underline.red);
        break;
}