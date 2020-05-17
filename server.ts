import express from 'express';

import { middlewares } from './src/middlewares';
import { router } from './src/routes';
import { config } from './src/config';

const app = express();

const serverConfig = config.server;
middlewares.forEach(mid => app.use(mid));
app.use('/', router);

app.listen(serverConfig.port, () => {
	console.log(`The server has started on port ${serverConfig.port}`);
});
