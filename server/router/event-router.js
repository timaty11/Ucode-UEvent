import Express from 'express';
import { body } from 'express-validator';

import Events from '../controller/events-controller.js';
import adminRoutes from '../routes/admin-routes.js';
import validationErrorEvent from '../middlewares/validationError.event.js';
import tryCatch from '../utils/try-catch.event.js';
import eventAccessEnied from '../middlewares/event.access-enied.js';
import { uploadFile } from '../middlewares/upload-file.js'

const router = Express.Router();

router.get(
  adminRoutes.eventsGetPath(),
  tryCatch(Events.getAllEvents),
  Events.getAllEvents
);

router.get(
  adminRoutes.eventSearch(),
  tryCatch(Events.searchEvent),
  Events.searchEvent
);

router.get(
  adminRoutes.eventIdGetPath(),
  tryCatch(Events.getEventsById),
  Events.getEventsById
);

router.get(
  adminRoutes.eventAllUsersSellTicketByEventId(),
  tryCatch(Events.getAllUsersSellTicketByEventId),
  Events.getAllUsersSellTicketByEventId
);

router.get(
  adminRoutes.eventTicketsGetPath(),
  tryCatch(Events.getAllEventTickets),
  Events.getAllEventTickets
);

router.get(
  adminRoutes.eventCategoriesGetPath(),
  tryCatch(Events.getAllCategoriesByEventId),
  Events.getAllCategoriesByEventId
);

router.get(
  adminRoutes.eventGetAllComments(),
  tryCatch(Events.getAllComments),
  Events.getAllComments
);

router.get(
  adminRoutes.eventGetRecommendEvent(),
  tryCatch(Events.recommendEvent),
  Events.recommendEvent
);

router.post(
  adminRoutes.eventPostPath(),
  body('title').notEmpty().isLength({ min: 3, max: 30 }).trim(),
  body('description').notEmpty().isLength({ min: 10, max: 255 }).trim(),
  body('city').notEmpty().isLength({ min: 2, max: 30 }).trim(),
  body('address').notEmpty().isLength({ min: 3, max: 30 }).trim(),
  body('event_start').notEmpty().trim(),
  body('event_end').notEmpty().trim(),
  validationErrorEvent,
  tryCatch(Events.createEvent),
  Events.createEvent
);

router.patch(
  adminRoutes.eventIdUpdatePath(),
  body('title').notEmpty().isLength({ min: 3, max: 30 }).trim(),
  body('description').notEmpty().isLength({ min: 10, max: 150 }).trim(),
  body('city').notEmpty().isLength({ min: 2, max: 30 }).trim(),
  body('address').notEmpty().isLength({ min: 3, max: 30 }).trim(),
  body('eventStart').notEmpty().trim(),
  body('eventEnd').notEmpty().trim(),
  validationErrorEvent,
  eventAccessEnied,
  tryCatch(Events.updateEvent),
  Events.updateEvent
);

router.post(
  adminRoutes.eventCreateCommentPath(),
  body('content').not().isEmpty().escape().trim(),
  tryCatch(Events.createComment)
);

router.post(
  adminRoutes.eventEploadFile(),
  uploadFile.single('image'),
  tryCatch(Events.eventEploadFile)
);

router.post(
  adminRoutes.eventCreateFavorite(),
  tryCatch(Events.createFavoriteEvent)
);

router.delete(
  adminRoutes.eventIdDeletePath(),
  eventAccessEnied,
  tryCatch(Events.deleteEvent)
);

export default router;
