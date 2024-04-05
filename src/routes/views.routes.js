import { Router } from 'express'

const router = Router()

// Aca SOLO habilitamos un endpoint /chat para probar el chat websockets
// Tenemos un solo endpoint que renderiza la plantilla /chat
router.get('/chat', (req, res) => {

    // Renderizando la plantilla /chat
    res.render('chat', {
        title: 'Chat BackendCoder'
    })

    // http://localhost:5000/chat

})

export default router