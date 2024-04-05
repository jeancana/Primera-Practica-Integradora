// Carpeta Controllers - para MONGODB 

// ******** CONTROLLERS de Mensajes con PERSISTENCIA DE ARCHIVOS EN MongoDB ********* 

// Nota Importante: Como MongoDB genera el ID no es necesario crear un metodo dentro de la clase para eso

// Aca traemos el Esquema/Modelo desiñado para trabajar la coleccion "messages en MongoDB"
// **** OJO: Al importar el messages.Model desde la carpeta Models nos traemos todo los metodos de la libreria mongoose 
// NO ES NECESARIO volver a importar la libreria de mongoose aca 
import messagesModel from '../models/messages.model.js'

export class MessageController {
   
    constructor() {
        // Creo el constructor y lo dejo vacio
    }

    // CREATE = Agregando un Mensaje a la BD
    async addMessage(message) {

        // Para verificar
        //console.log('mensaje llego al controller:', message)

        try {

            // Cargando el mensaje en BD
            const loaded = await messagesModel.create(message)

            // Retornando el Mensaje Cargado en la BD
            return loaded

        } catch (err) {

            return err.message

        }
    }

    // READ =  Leyendo todos los Mensaje creados en la BD
    //  Nota: Esto en caso de que se necesite hacer un reporte de los todos chats guardados
    async getMessage() {
        try {

            // COMO hace un solo Proceso pongo todo en el return
            return await messagesModel.find().lean() 

        } catch (err) {

            return err.message

        }

    }

   
}