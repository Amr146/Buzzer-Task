import { Router } from 'express';
import productsRouter from './products/router';
import categoriesRouter from './categories/router';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Hello World! from route');
});

routes.use('/products', productsRouter);
routes.use('/categories', categoriesRouter);

export default routes;
