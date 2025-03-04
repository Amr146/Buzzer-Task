import * as controller from './controller';

import { Router } from 'express';

const categoriesRouter = Router();

categoriesRouter.get('/', controller.getCategories);
categoriesRouter.get('/:id', controller.getCategoryById);
categoriesRouter.post('/', controller.createCategory);
categoriesRouter.put('/:id', controller.updateCategory);
categoriesRouter.delete('/:id', controller.deleteCategory);

export default categoriesRouter;
