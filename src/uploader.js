// Bloque de codigo para configurar el multer en el proyecto actual 

// ******* PEQUENO CARGADOR DE ARCHIVOS ******** 

import multer from 'multer'
import { __dirname } from './utils.js'

// Multer es un Modulo como el cual podemos Inyectar un Middleware que se encarga de subida de Archivos/Imagenes etc etc 
// Esta pieza de Codigo sale de documentacion del Modulo de Multer
// Esta es una configuracion Esencial 
const storage = multer.diskStorage({

    // Aca Cual va ser el Destino del video/Img o Archivo que se suba
    // Todo lo que se suba va ir a guardar en la carpeta /public/img
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/public/img`)
    },

    // Aca le estamos Asignado como Nombre al archivo SUBIDO el nombre Original con el viene del lado del cliente
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

// Estamos Exportando un constante
export const uploader = multer({ storage })


// Multer es un Modulo como el cual podemos Inyectar un Middleware que se encarga de subida de Archivos/Imagenes etc etc 


