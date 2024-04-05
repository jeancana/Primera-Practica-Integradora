

// *** PASO 1: Importar la libreria de Mongoose 

import mongoose from 'mongoose'// Aca importamos la libreria xq necesitamos usar los metodos mongoose.model() y mongoose.Schema()

// *** Atención!, si se usa populate en este módulo, no olvidar importar el/los
// modelos adicionales necesarios
import productsModel from '../models/products.model.js'

// IMPORTANTE: agregar esta línea SIEMPRE para no tener problemas con algunas configuraciones predeterminadas de Mongoose
mongoose.pluralize(null)

// *** PASO 2: la colección a Trabajar la que llamamos "carts" dentro de la DB(MongoDB) y tiene el esquema indicado debajo

// 2.1) IMPORTANTE: El nombre que asignemos en el Archivo carts.models.js a la "const collection" desde ser EXACTAMENTE IGUAL al nombre que pusimos cuando creamos la "coleccion=carts" dentro "BD=coder_55605" en MongoDB-Compas 

const collection = 'carts'

// 2.2) Aca diseñamos el esquema que va a tener la coleccion 
const schema = new mongoose.Schema({

    // Creando un Modelo/schema para la Coleccion Carrito = carts
    // IMPORTANTE - Cada Documento de mi Coleccion de Carritos va a tener:
    // 1) Un Array de Productos
    // 2) Una propiedad total


    // *** Explicando a detalle el Array de Productos :

    // Parametro 1:
    // 1.1 El valor [ mongoose.Schema.Types.ObjectId ] - Significa que estoy guardando aca ID de MongoDB
    // 1.2  En el atributo "type" estoy guardando un array de Id's de MongoDB
    // 1.3 Se va a armar un Carrito con un Array que contenga SOLO Id's de Productos (No se trae todo el producto)
    // Parametro 2:
    // El atributo ref nos permite indicar que el campo se "enlazará" a otra colección de la DB en esta caso 'products'
    // Al estar enlazado se puede completar los datos relacionados con otra coleccion fuera de la coleccion 'carts'
    products: { type: [mongoose.Schema.Types.ObjectId], ref: 'products' }, // ref a la colección 'products' en la BD 
    //products: { type: Array, required: true }, // Esta una forma sencilla de hacerlo que YO INVENTE 31-01-2024
    // Aca creamos el la Propiedad total con el atributo Type
    total: { type: Number, required: true }

})

// POPULATE (middleware): Es un enlace de relaciones en una BD NO relacional, QUE me permite CRUZAR distintas colecciones y en una sola CONSULTA obtener todos los Datos 

// ****** USANDO Populate dentro del MODEL (Forma como lo hacen CODERHOUSE)******** 
// - Me permite VER todo el DETALLE de cada Producto dentro del CARRITO y NO SOLO el ID a la hora de consultar la ruta 
// Este MIDDLEWARE nos permite interceptar cualquier llamada a find() antes de vaya al controlador y ejecutar
// sobre ella un populate. En el ejemplo, estamos haciendo populate (completando)
// el array products con datos que vienen desde la colección products a través
// del modelo productModel.
// Se puede utilizar el middleware aquí, o directamente hacer el populate a mano
// al momento de llamar al método find()
// En path: , debo colocar el nombre de la coleccion que voy a relacionar 
// .pre() es un middleware que inyecta el populate y permite hacer un operacion ANTES = .pre() para luego seguir ejecutando
schema.pre('find', function () {
    this.populate({ path: 'products', model: productsModel });
})

// El .pre() es un metodo propio de mongoose y tiene 2 parametros 


// 2.3) Aca Creamos el Modelo a Exportar
// - El modelo tiene 2 parametros: 
// - En el Parametro Nro1: le paso la Constante "collection" 
// - En el Parametro Nro2: le paso la Constante "schema"

const cartsModel = mongoose.model(collection, schema)

// 2.4) Habilitamos para Exportar el usersModel(modelo de Mongoose)
export default cartsModel

// Otra Forma de exportar el Modelo
//export default mongoose.model(collection, schema)


