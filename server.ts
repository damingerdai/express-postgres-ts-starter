import express from 'express';

const server = express();

server.use('/ping', (res, req) => req.json('pong'));

server.listen(8080, () => console.log(`The server has started on port 8080`));