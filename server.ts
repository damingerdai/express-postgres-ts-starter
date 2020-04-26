import express from 'express';

import { router } from './src/routes';
import { config } from 'src/config';

const server = express();

const serverConfig = config.server;

server.use('/', router);

server.listen(serverConfig.port, () => {
	console.log(`The server has started on port ${serverConfig.port}`);
});
