
// Carpeta Controllers - para MONGODB 

// ******** CONTROLLERS de Productos con PERSISTENCIA DE ARCHIVOS EN MongoDB ********* 

// Nota Importante: Como MongoDB genera el ID no es necesario crear un metodo dentro de la clase para eso

// Aca traemos el Esquema/Modelo desiñado para trabajar la coleccion "products en MongoDB"
// Al importar el productsModel desde la carpeta Models nos traemos todo los metodos de la libreria mongoose 
// NO ES NECESARIO volver a importar la libreria de mongoose aca 
import productsModel from '../models/products.model.js'

export class ProductsController {
    
    constructor() {
        // Creo el constructor y lo dejo vacio
    }

    // CREATE = Agregando un Producto a la BD
    async addProduct(product) {
        
        try {
            
            await productsModel.create(product)
            
            return "Producto agregado"

        } catch (err) {
            
            return err.message

        }
    }

    // READ =  Leyendo todos los productos de la BD 
    async getProducts() {
        
        try {

            // Detalle util agregar el .lean() limpiar el objeto que me devuelve mongoose y queda optimo el formato para JavaScript
            const products = await productsModel.find().lean()

            return products

        } catch (err) {

            return err.message
        }

    }

    // READ BY ID = Leyendo un(1) producto de la BD por su ID 
    async getProductById(id) {
        
        try {

            // uso el metodo .findById(id) que me proporciona mongoose
            const product = await productsModel.findById(id)
            
            // Aca hacemos una validacion ternaria a modo de control dentro del return
            return product === null ? 'No se encuentra el producto' : product

        } catch (err) {
            return err.message
        }
    }

    // UPDATE = actualizar un Producto por su ID en la BD
    // tiene 2 parametros: 
    // El 1er la paso ID del producto a actualizar
    // El 2do le paso el objeto con la informacion a actualizar
    async updateProduct(id, newContent) {

        try {

            // uso el metodo .findByIdAndUpdate() que me proporciona mongoose
            const procedure = await productsModel.findByIdAndUpdate(id, newContent)
            return procedure

        } catch (err) {

            return err.message
        }
    }

    // DELETE = Borrar un producto de la BD
    async deleteProductById(id) {
        try {

            // uso el metodo .findByIdAndDelete() que me proporciona mongoose
            const procedure = await productsModel.findByIdAndDelete(id)
            return procedure

        } catch (err) {

            return err.message

        }
    }
  
}