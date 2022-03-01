import { Router } from 'express';

// handlers
import list from './controllers/list';
import getSpesificPost from './controllers/getSpesificPost';

const postsRouter = Router();

postsRouter.get('/', list);
postsRouter.get('/:url', getSpesificPost);

export default postsRouter;
