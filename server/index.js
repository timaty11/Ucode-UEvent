import Express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import authRouter from './router/auth-router.js';
import eventRouter from './router/event-router.js';
import ticketRouter from './router/ticket-router.js';
import commentRouter from './router/comment-router.js';
import adminRouter from './router/admin-router.js';
import categoryRouter from './router/category-router.js';
import organozationRouter from './router/organization-router.js';
import cityRouter from './router/city-route.js';
import payRouter from './router/pay-router.js';
import errorMiddleware from './middlewares/error-middleware.js';
import ApiError from './exceptions/api-error.js';
import SendMail from './services/send-mail.js';

export default () => {
  const corsConfig = {
    origin: 'http://localhost:5173',
    credentials: true,
  };

  dotenv.config();

  const app = new Express({ logger: true });
  app.use(cookieParser());

  app.use(cors(corsConfig));
  // app.options('Access-Control-Allow-Origin', cors(corsConfig));

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/api/avatars', Express.static(`${path.resolve()}/assets/avatars`));
  app.use('/api/event-pic', Express.static(`${path.resolve()}/assets/events`));
  // app.use('/picture-post', Express.static(`${path.resolve()}/picture-post`));
  app.use('/api/auth', authRouter);
  app.use('/api/event', eventRouter);
  app.use('/api/ticket', ticketRouter);
  app.use('/api/city', cityRouter);
  app.use('/api/category', categoryRouter);
  app.use('/api/comment', commentRouter);
  app.use('/api/organization', organozationRouter);
  app.use('/api/user', adminRouter);
  app.use('/api/pay', payRouter);
  app.post('/api/text', async (req, res) => {
    const { email } = req.body;
    const massage = new SendMail();
    const response = await massage.send(email, {}, 'ticket');
    res.json({ response });
  });

  app.use('*', () => {
    throw ApiError.NotFound();
  });

  app.use(errorMiddleware);

  return app;
};
