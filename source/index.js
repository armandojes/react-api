/* eslint-disable no-unused-vars */
import express from 'express';
import ip from 'ip';
import response from 'source/middlewares/response';
import bodyParser from 'body-parser';
import cors from 'cors';

// modules
import postRouter from 'source/modules/posts/postsRouter';
import usersRouter from 'source/modules/users/usersRouter';

const server = express();

// helpers middlewares
server.use(response);
server.use(bodyParser.json());
server.use(cors());

// integrate modules
server.use('/posts', postRouter);
server.use('/users', usersRouter);

// error 404 handler
server.use((req, res) => {
  res.error('path not found', 404, {
    path: req.url,
    statusCode: 404,
  });
});

// errorHandler
server.use((error, _req, res, _next) => {
  res.error({
    errorMessage: error.message,
  });
});

server.listen(
  3001,
  () => console.log(`api stared at ${ip.address()}:3001`),
);
