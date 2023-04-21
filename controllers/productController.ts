import {Request, Response} from "express";
import ProductService from "../services/productService"
import productService from "../services/productService";

class ProductController {
    private productService

    constructor() {
        this.productService = ProductService;
    }

    showAll = async (req: Request, res: Response) => {
        let listProduct = await productService.find();
        res.render('index', {products: listProduct})
    }
    showProducts = async (req: Request, res: Response) => {
        let listProduct = await productService.find();
        res.render('products/product', {products: listProduct})
    }
    showFormAdd = async (req: Request, res: Response) => {
        res.render('products/create')
    }
    addProduct = async (req: Request, res: Response) => {
       await this.productService.add(req.body);
       res.redirect(301,'/products/admin')
    }
    removeProduct = async (req: Request, res: Response) => {
        await this.productService.remove(req.params.id);
        res.redirect(301,'/products/admin')
    }
    showFormEdit = async (req: Request, res: Response) => {
        const product = await this.productService.showProduct(req.params.id);
        res.render('products/edit',{product: product})
    }
    updateProduct = async (req: Request, res: Response) => {
        await this.productService.updateProduct(req.params.id,req.body);
        res.redirect(301,'/products/admin')
    }
}

export default new ProductController();