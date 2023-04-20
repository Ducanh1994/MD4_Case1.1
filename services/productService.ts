import {Product} from "../entities/product";

class ProductService {
    constructor() {

    }
    find = async () => {
       const products =await Product.find();
       return products
    }
}
export default new ProductService();