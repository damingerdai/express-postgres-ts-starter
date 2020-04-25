import express from 'express';
import JoiValidator from 'express-joi-validation';
import ExpressRouter from 'express-promise-router';

import { routes } from './src/routes';
import { config } from 'src/config';

const server = express();

const serverConfig = config.server;
const router = ExpressRouter(serverConfig.router);

routes.forEach(route => {
	const schema = route?.schema;
	const next = (req, res, nxt) => nxt();

	const validateBody = schema?.body ? JoiValidator().body(schema.body) : next;
	const validateParams = schema?.params ? JoiValidator().params(schema.params) : next;
	const validateQuery = schema?.query ? JoiValidator().query(schema.query) : next;

	switch (route.method) {
		case 'GET':
			console.log(route)
			router.get(route.path, validateBody, validateParams, validateQuery, route.controller);
			break;
		case 'POST':
			router.post(route.path, validateBody, validateParams, validateQuery, route.controller);
			break;
		case 'PUT':
			router.put(route.path, validateBody, validateParams, validateQuery, route.controller);
			break;
		case 'PATCH':
			router.patch(route.path, validateBody, validateParams, validateQuery, route.controller);
			break;
		case 'DELETE':
			router.delete(route.path, validateBody, validateParams, validateQuery, route.controller);
			break;
		default:
			throw new Error(`Failed to load route. Invalid method: ${route.method} for path ${route.path}`);
	}
})

server.use('/', router);

server.listen(serverConfig.port, () => {
	console.log(`The server has started on port ${serverConfig.port}`);
});
