import Express from 'express';
import { body } from 'express-validator';

import ticketsController from '../controller/tickets-controller.js';
import adminRoutes from '../routes/admin-routes.js';
import validationErrorTicket from '../middlewares/validationError.ticket.js';
import tryCatch from '../utils/try-catch.event.js';

const router = Express.Router();

router.get(
  adminRoutes.ticketsGetPath(),
  tryCatch(ticketsController.getAllTikets),
  ticketsController.getAllTikets
);

router.post(
  adminRoutes.ticketPostPath(),
  body('count').notEmpty(),
  body('price').notEmpty().trim(),
  validationErrorTicket,
  tryCatch(ticketsController.createTickets),
  ticketsController.createTickets
);

export default router;
