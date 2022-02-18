/* eslint-disable no-unused-vars */
import express from 'express';
import ip from 'ip';
import response from 'source/middlewares/response';
import bodyParser from 'body-parser';

// modules
import postRouter from 'source/modules/posts/postsRouter';
import usersRouter from 'source/modules/users/usersRouter';

const server = express();

// helpers middlewares
server.use(response);
server.use(bodyParser.json());

// integrate modules
server.use('/post', postRouter);
server.use('/user', usersRouter);

// error 404 handler
server.use((req, res) => {
  res.error({
    errorMessage: 'path not found',
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
