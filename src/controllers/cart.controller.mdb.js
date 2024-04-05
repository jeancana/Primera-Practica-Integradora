// Carpeta Controllers - para MONGODB 

// ******** CONTROLLERS de Carritos con PERSISTENCIA DE ARCHIVOS EN MongoDB ********* 

// Nota Importante: Como MongoDB genera el ID no es necesario crear un metodo dentro de la clase para eso

// Aca traemos el Esquema/Modelo desiñado para trabajar la coleccion "carts en MongoDB"
// **** OJO: Al importar el cartsModel desde la carpeta Models nos traemos todo los metodos de la libreria mongoose 
// NO ES NECESARIO volver a importar la libreria de mongoose aca 
import cartsModel from '../models/carts.model.js'

// Atención!, si se usa populate en este módulo, no olvidar importar el/los
// modelos adicionales necesarios
//import productsModels from '../models/carts.model.js' // (Esta desactivada - No lo usamos)

export class CartController {
   
    constructor() {
        // Creo el constructor y lo dejo vacio
    }


    // CREATE = Agregando un carto a la BD
    async addCart(cart_id) {

        try {

            await cartsModel.create(cart_id)

            return "carrito Creado"

        } catch (err) {

            return err.message

        }
    }

    // READ =  Leyendo todos los Carritos creados en la BD
    async getCarts() {
        try {

            // COMO hace un solo Proceso pongo todo en el return
            return await cartsModel.find().lean()


        } catch (err) {

            return err.message

        }

    }

   
}