import Express from 'express';
import City from '../controller/city-controller.js';
import tryCatch from '../utils/try-catch.event.js';

const router = Express.Router();

router.get('/', tryCatch(City.getAll));

export default router;