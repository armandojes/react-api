import express from 'express';
import ip from 'ip';
import response from './middlewares/response';

const server = express();
server.use(response);

server.get('*', (request, res) => {
  res.success({ message: 'message' });
});

server.listen(
  3001,
  () => console.log(`api stared at ${ip.address()}:3001`),
);
