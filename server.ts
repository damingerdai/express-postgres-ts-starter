import express from 'express';

import { middlewares } from './src/middlewares';
import { router } from './src/routes';
import { config } from './src/config';

const server = express();

const serverConfig = config.server;
middlewares.forEach(mid => server.use(mid));
server.use('/', router);

server.listen(serverConfig.port, () => {
	console.log(`The server has started on port ${serverConfig.port}`);
});
