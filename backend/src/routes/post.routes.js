import { Router } from 'express';

const router = Router();

/* =================================
--------------MIDDLEWARES-----------
====================================*/
import { isAuthenticated } from '../middlewares/user.middlewares.js';
import upload from '../middlewares/multer.middlewares.js';

/* =================================
--------------CONTROLLERS-----------
====================================*/
import createPost from '../controllers/Post/createPost.controllers.js';
import retrievePosts from '../controllers/Post/retrivePost.controllers.js';

router
  .route('/create-post')
  .post(isAuthenticated, upload.array('image', 19), createPost);

router.route('/retrieve-post').get(isAuthenticated, retrievePosts);

export default router;
