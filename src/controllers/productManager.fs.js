import { promises as fs } from 'fs'

export default class ProductManager {
    
    constructor() {
        this.products = []
        this.path = './products.json'
    }

    static id = 0
  

    addProducts = async (title, description, code, status, stock, category, thumbnail ) => {
        
        ProductManager.id++
        let newProducts = { id: ProductManager.id, title, description, code, status, stock, category, thumbnail }
        this.products.push(newProducts)
        await fs.writeFile(this.path, JSON.stringify(this.products, null, '\t'))
    }

    
    readProducts = async () => {
        let contenido = await fs.readFile(this.path, 'utf-8')
        // console.log(contenido)
        return JSON.parse(contenido)
    }

    getProducts = async () => {
        let contenido2 = await this.readProducts()
        return (contenido2)
    }

    getProductsById = async (id) => {
        let contenido3= await this.readProducts()  
        let repuesta = contenido3.find(product => product.id === id)
        return(repuesta)
    }

    // Para poder Actualizar un  SOLO Articulo debo PISAR todo el file e indicar hacer la actualizacio en el articulo deseado
    upDateProducts = async (upDate) => {

        let newProducts =  upDate 
        this.products = newProducts
        await fs.writeFile(this.path, JSON.stringify(this.products, null, '\t'))
    }

    deleteProductsById = async (id) => {
        let contenido4 = await this.readProducts()  
        let filterProduct = contenido4.filter((producto) => producto.id != id)
        await fs.writeFile(this.path, JSON.stringify(filterProduct, null, '\t'))
    }

}











