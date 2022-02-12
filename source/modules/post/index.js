import { Router } from 'express';

// handlers
import list from './controllers/list';

const postsRouter = Router();

postsRouter.get('/', list);

export default postsRouter;
