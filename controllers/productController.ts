import {Request,Response} from "express";
import ProductService from "../services/productService"
import productService from "../services/productService";

class ProductController {
    private productService
    constructor() {
        this.productService = ProductService;
    }
    showAll = async (req:Request,res:Response) => {
        let listProduct = await productService.find();
        res.render ('index',{products: listProduct})
    }
}
export default new ProductController();