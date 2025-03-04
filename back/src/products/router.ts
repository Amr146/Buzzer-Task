import * as controller from './controller';
import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', controller.getProducts);
productsRouter.get('/:id', controller.getProductById);
productsRouter.post('/', controller.createProduct);
productsRouter.put('/:id', controller.updateProduct);
productsRouter.delete('/:id', controller.deleteProduct);

export default productsRouter;
