import JoiValidator from 'express-joi-validation';
import ExpressRouter from 'express-promise-router';

import { Ping } from './ping';
import { config } from 'src/config';

const expressRouter = ExpressRouter(config?.server?.router);

export const routes = [Ping];

routes.forEach(route => {
	const schema = route?.schema;
	const next = (req, res, nxt) => nxt();

	const validateBody = schema?.body ? JoiValidator().body(schema.body) : next;
	const validateParams = schema?.params
		? JoiValidator().params(schema.params)
		: next;
	const validateQuery = schema?.query
		? JoiValidator().query(schema.query)
		: next;

	switch (route.method) {
	case 'GET':
		expressRouter.get(
			route.path,
			validateBody,
			validateParams,
			validateQuery,
			route.controller
		);
		break;
	case 'POST':
		expressRouter.post(
			route.path,
			validateBody,
			validateParams,
			validateQuery,
			route.controller
		);
		break;
	case 'PUT':
		expressRouter.put(
			route.path,
			validateBody,
			validateParams,
			validateQuery,
			route.controller
		);
		break;
	case 'PATCH':
		expressRouter.patch(
			route.path,
			validateBody,
			validateParams,
			validateQuery,
			route.controller
		);
		break;
	case 'DELETE':
		expressRouter.delete(
			route.path,
			validateBody,
			validateParams,
			validateQuery,
			route.controller
		);
		break;
	default:
		throw new Error(
			`Failed to load route. Invalid method: ${route.method} for path ${route.path}`
		);
	}
});

export const router = expressRouter;
