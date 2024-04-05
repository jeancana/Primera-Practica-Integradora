import { promises as fs } from 'fs'

export default class CartManager {
    
    constructor() {
        this.carts = []
        this.path = './carts.json'
    }

    static id = 0
  

    addProducts = async (products) => {
        
        CartManager.id++
        let newCarts= { id: CartManager.id, products }
        this.carts.push(newCarts)
        await fs.writeFile(this.path, JSON.stringify(this.carts, null, '\t'))
    }

    // Metodo Interno que se usara solo para hacer los Metodos GetAll y GetByID
    readCarts = async () => {
        let cartsContent = await fs.readFile(this.path, 'utf-8')
        return JSON.parse(cartsContent)
    }


    getCarts = async () => {
        let contenido2 = await this.readCarts()
        return console.log(contenido2)
    }


    getCarstById = async (id) => {
        let showOneContent = await this.readCarts()  
        let response = showOneContent.find(product => product.id === id)
        return(response)
    }

    upDateCarts = async (title, description, price, thumbnail, code, stock) => {
        CartManager.id++
        let newCarts= { id: CartManager.id, title, description, price, thumbnail, code, stock }
        this.products.push(newCarts)
        await fs.writeFile(this.path, JSON.stringify(this.carts, null, '\t'))
    }

    deleteCartsById = async (id) => {
        let deleteContent = await this.readCarts()  
        let filterProduct = deleteContent.filter((producto) => producto.id != id)
        
        console.log(filterProduct)
        await fs.writeFile(this.path, JSON.stringify(filterProduct, null, '\t'))
    }

}











