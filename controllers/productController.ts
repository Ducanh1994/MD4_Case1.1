import {Request,Response} from "express";


class ProductController {
    constructor() {
    }
    findAll = (req:Request,res:Response) => {
        res.render('index')
    }
}
export default new ProductController();