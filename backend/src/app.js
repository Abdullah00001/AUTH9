import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { baseUrl } from './constants.js';
import corsConfig from './configs/cors.configs.js';
const app = express();

/* ===============================
 --- CONFIGURATION MIDDLEWARES ---
=================================*/
app.use(express.json());
app.use(cors(corsConfig));
app.use(cookieParser());
/* app.use(express.static(path.join())); */

/* ===============================
------------- ROUTES ----------
=================================*/
import UserRoutes from './routes/user.routes.js';
import PostRoutes from './routes/post.routes.js';

app.get('/', (req, res) => {
  return res.send('Hello World');
});
app.use(`${baseUrl}/user`, UserRoutes);
app.use(`${baseUrl}/post`, PostRoutes);

export { app };
