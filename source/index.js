import express from 'express';
import ip from 'ip';
import response from 'source/middlewares/response';
import 'models/auth';

// modules
import postRouter from 'source/modules/post';

const server = express();
server.use(response);

server.use('/post', postRouter);

server.listen(
  3001,
  () => console.log(`api stared at ${ip.address()}:3001`),
);
