import {Router} from "express";
import productController from "../controllers/productController";
const router = Router();

router.get('/products',productController.showAll);
router.get('/products/admin',productController.showProducts);
router.get('/products/admin/create',productController.showFormAdd);
router.post('/products/admin/create',productController.addProduct);
router.get('/products/admin/:id',productController.removeProduct);
router.get('/products/admin/edit/:id',productController.showFormEdit);
router.post('/products/admin/edit/:id',productController.updateProduct);
export default router;