import Express from 'express';
import { body } from 'express-validator';
import Category from '../controller/categories-controller.js';
import validationCotegories from '../middlewares/validationError.category.js';
import tryCatch from '../utils/try-catch.event.js';
import adminRoutes from '../routes/admin-routes.js';

const router = Express.Router();

router.get(adminRoutes.categoriesGetPath(), tryCatch(Category.getAllCategory));
router.get(adminRoutes.categoryIdGetPath(), tryCatch(Category.getCategoryById));
router.get(
  adminRoutes.categoryIdGetAllEventPath(),
  tryCatch(Category.getAllEventByCategoryId)
);
router.post(
  adminRoutes.categoryPostPath(),
  body('title').not().isEmpty().trim().escape(),
  body('description').not().isEmpty().trim().escape(),
  validationCotegories,
  tryCatch(Category.createCategory)
);

router.patch(
  adminRoutes.categoryIdUpdatePath(),
  body('title').not().isEmpty().trim().escape(),
  body('description').not().isEmpty().trim().escape(),
  validationCotegories,
  tryCatch(Category.updateCategoryData)
);

router.delete(
  adminRoutes.categoryIdDeletePath(),
  tryCatch(Category.deleteCategory)
);

export default router;
