
// ************* PAQUETE DE RUTAS PARA LA API DE Carritos (api/carts) ********************

// Aca vamos a Preparar el CRUD para las rutas del Archivo carts.routes.js

// Vamos a Tener 5 rutas para manejar carts: 
// 1) Crear un cart en la BD
// 2) Leer/Consultar todos los carts de la BD 
// 3) Leer/Consultar un(1) cart de la BD 
// 4) Actualizar un(1) cart de la BD
// 5) Borrar un(1) cart de la BD

// ********* C.R.U.D DE carritos ************

// 3 Pasos basicos para Intregar y Poder Usar carts.controllers.mdb.js EN carts.routes.js 
// Paso Nro1: importar el controlador
// Paso Nro2: Generar un nueva Instancia del controlador
// Paso Nro3: Usar los Metodo importados de la carpeta Controller que Necesite

import { Router } from 'express'

//Paso 1: Importando la clase products.controllers.mdb.js  
// Esta Importacion funciona para: Persistencia de Archivos con MongoDB
// Estamos importando la Clase que CartControlle contiene los metodos
import { CartController } from '../controllers/cart.controller.mdb.js'

const router = Router()

// Paso 2: Generando una nueva Intanscia - Persistencia de Archivos con MongoDB
const controller = new CartController()

// ******** CREANDO el C.R.U.D y Usanso los Metodos Importados del Archivo cart.controller.mdb.js  *************

// Nota: Fortalecimos el Codigo agregando try/catch en todas las rutas y respetamos los codigos de Estado

// *** 1.1) Read - Endpoint para leer/Consultar todos los Carritos de la DB - Con POSTMAN
router.get('/', async (req, res) => {

    try {

        // Paso 3: Usando el Metodo .getProducts() disponible en archivo product.controller.mdb.js

        // Forma vieja de hacerlo
        // const products = await controller.getProducts()

        // Aca Mandamos la respuesta al cliente con el listado de productos encontrados Directo por el JSON
        res.status(200).send({ status: 'OK. Mostrando Listado de Carritos', data: await controller.getCarts() })

    } catch (err) {

        res.status(500).send({ status: 'ERR', data: err.message })

    }
})





// *** 2) Create - Endpoint para Agregar un Producto y cargar Imagenes con Multer en la DB - Con POSTMAN  
router.post('/', async (req, res) => {
    
    //console.log(req.body)// Verificando lo que viene por el body
    
    const idProduct = req.body // Asignando lo que viene por body a una constante
    
    //console.log(idProduct)
    
    try {
        
        
        // Paso 3: Usando el Metodo .addProduct() disponible en archivo product.controller.mdb.js
        const result = await controller.addCart( idProduct )
        
        // Aca Mandamos la respuesta al cliente
        res.status(200).send({ status: 'OK. Producto Creado', data: result })
        
    } catch (err) {
        
        res.status(500).send({ status: 'ERR', data: err.message })
        
    }
    
})


export default router