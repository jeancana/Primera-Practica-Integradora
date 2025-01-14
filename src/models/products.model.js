
// *** PASO 1: Importar la libreria de Mongoose 

import mongoose from 'mongoose'//aca importamos la libreria xq necesitamos usar los metodos mongoose.model() y mongoose.Schema()


// IMPORTANTE: agregar esta línea SIEMPRE para no tener problemas con algunas configuraciones predeterminadas de Mongoose
mongoose.pluralize(null)


// *** PASO 2: la colección a Trabajar la que llamamos "products" dentro de la DB(MongoDB) y tiene el esquema indicado debajo

// 2.1) IMPORTANTE: El nombre que asignemos en el Archivo products.models.js a la "const collection" desde ser EXACTAMENTE IGUAL al nombre que pusimos cuando creamos la "coleccion=products" dentro "BD=ecommerce" en MongoDB-Compas 

const collection = 'products'// Esta la coleccion creada "coleccion=products" dentro "BD=ecommerce" en MongoDB-Compas 

// 2.2) Aca diseñamos el esquema que va a tener la coleccion 
const schema = new mongoose.Schema({

   // Aca dentro delineamos el Schema(esquema) con el funciona la Coleccion "users"
   title: { type: String, required: true }, // le estoy pasando un Objeto como valor a la propiedad(clave)
   description: { type: String, required: false },
   price: { type: Number, required: true },
   thumbnail: { type: String, required: false },
   code: { type: String, required: true },
   stock: { type: Number, required: true }

}) 

// 2.3) Aca Creamos el Modelo a Exportar

// - El modelo tiene 2 parametros: 
// - En el Parametro Nro1: le paso la Constante "collection" 
// - En el Parametro Nro2: le paso la Constante "schema"

const productsModel = mongoose.model(collection, schema)

// 2.4) Habilitamos para Exportar el productModel(modelo de Mongoose)
export default productsModel


