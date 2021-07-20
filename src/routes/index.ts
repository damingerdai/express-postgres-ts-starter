/*
 *Copyright 2020 大明二代
 *
 *Licensed under the Apache License, Version 2.0 (the "License");
 *you may not use this file except in compliance with the License.
 *You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *Unless required by applicable law or agreed to in writing, software
 *distributed under the License is distributed on an "AS IS" BASIS,
 *WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *See the License for the specific language governing permissions and
 *limitations under the License.
 */
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
