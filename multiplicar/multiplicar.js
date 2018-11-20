/**
 * Tabla de multiplicar
 */

const fs = require('fs'); // modulo nativo de node filesystem.
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('===================='.green);
    console.log(`=== Tabla del ${ base } ===`.magenta);
    console.log('===================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ colors.green(base) } * ${ colors.red(i) } ${colors.cyan('=')} ${ colors.underline.yellow(base * i) }`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let nombreArchivo = `tabla-multiplicar-${ base }.txt`;
        let datos = '';
        // Validar que base sea un número.
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es número.`);
            return;
        }

        // Tabla de multiplicar según la base.
        for (let n = 1; n <= limite; n++) {
            datos += `${ base } * ${ n } = ${ base * n }\n`;
        }

        // Crear un archivo que almacene el resultado de la tabla de multiplicar.
        // const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tablas/${ nombreArchivo }`, datos, (err) => {
            if (err)
                reject(err);
            else
                resolve(nombreArchivo);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}