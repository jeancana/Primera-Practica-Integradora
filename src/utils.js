// Al estar habilitado el type: Module (sistema de Modulos) en el ECMAS No es posible usar la constante __dirname (esta definida para common.js)

// POR TANTO debemos crear a MANO las constantes necesarias para que funcione LAS RUTA ABSOLUTAS y luego exportarlas

// Creando los const ABSOLUTOS que me permiten tener PATH ABSOLUTAS = rutas absolutas

// importa todas las url de 'url' (trabajamos con todos las funciones prefabricadas en el modulo 'url')
import * as url from 'url'

export const __filename = url.fileURLToPath(import.meta.url)
export const __dirname = url.fileURLToPath(new URL('.', import.meta.url))



