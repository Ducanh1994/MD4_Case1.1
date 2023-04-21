import {Product} from "../entities/product";

class ProductService {
    constructor() {

    }
    find = async () => {
       const products =await Product.find();
       return products
    }
    add = async (product) => {
        await Product.create(product)
    }
    remove = async (id) => {
        await Product.deleteOne({'_id':id})
    }
    showProduct = async (id) => {
       const product = await Product.findOne({'_id':id});
       return product;
    }
    updateProduct = async (id,product) => {
        await Product.updateOne({'_id':id},{name:product.name,price:product.price,quantity:product.quantity,
        image: product.image})
    }
}
export default new ProductService();