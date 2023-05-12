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
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import {
	ApolloServerPluginLandingPageLocalDefault,
	ApolloServerPluginLandingPageProductionDefault
} from '@apollo/server/plugin/landingPage/default';
import * as dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
dotenv.config();

import { middlewares } from './src/middlewares';
import { router } from './src/routes';
import { config } from './src/config';
import { IContext, contextBuilder } from './src/graphql/context';
import { resolvers } from './src/graphql/resolvers';
import { typeDefs } from './src/graphql/schemas';
import { logger } from './src/lib/logger';
import { initializePgBoss } from './src/service/pg-boss';

async function startServer() {
	const app = express();
	app.set('trust proxy', 1);
	const serverConfig = config.server;
	middlewares.forEach(mid => app.use(mid));

	const httpServer = http.createServer(app);

	const apolloServer = new ApolloServer<IContext>({
		typeDefs,
		resolvers,
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			ApolloServerPluginLandingPageLocalDefault({ footer: false })
		]
	});

	await apolloServer.start();

	app.use(
		'/graphql',
		/*
		 * Cors<cors.CorsRequest>(),
		 * json(),
		 */
		expressMiddleware(apolloServer, {
			context: ({ req }) => Promise.resolve(contextBuilder(req))
		})
	);

	app.use('/', router);
	app.get('/static/index.html', (req, res) => {
		res.sendFile(__dirname + '/static/index.html');
	});

	const io = new Server(httpServer);
	io.on('connection', socket => {
		console.log('a user connected');
		socket.on('chat message', msg => {
			io.emit('chat message', `hi, ${msg}`);
		});
		socket.on('disconnect', () => {
			console.log('user disconnected');
		});
	});

	httpServer.listen(serverConfig.port, () => {
		logger.info(`The server has started on port ${serverConfig.port}`);
	});
}

/* istanbul ignore if: main scope */
if (require.main === module) {
	startServer();
	initializePgBoss();
}
