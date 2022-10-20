/*
 * Copyright 2020 大明二代
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import express from 'express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import * as dotenv from 'dotenv';
dotenv.config();

import { middlewares } from './src/middlewares';
import { router } from './src/routes';
import { config } from './src/config';
import { resolvers } from './src/graphql/resolvers';
import { typeDefs } from './src/graphql/schema';
import { logger } from './src/lib/logger';

async function startServer() {
	const app = express();

	const serverConfig = config.server;
	middlewares.forEach(mid => app.use(mid));

	const server = new ApolloServer({
		resolvers,
		typeDefs,
		plugins: [
			ApolloServerPluginLandingPageGraphQLPlayground({
				settings: {
					'editor.theme': 'dark',
					'editor.cursorShape': 'line'
				}
			}),
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			require('apollo-tracing').plugin()
		]
	});
	await server.start();
	server.applyMiddleware({ app, path: '/graphql' });

	app.use('/', router);

	app.listen(serverConfig.port, () => {
		logger.info(`The server has started on port ${serverConfig.port}`);
	});
}

/* istanbul ignore if: main scope */
if (require.main === module) {
	startServer();
}
