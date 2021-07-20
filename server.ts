import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { middlewares } from './src/middlewares';
import { router } from './src/routes';
import { config } from './src/config';
import { resolvers } from './src/graphql/resolvers';
import { typeDefs } from './src/graphql/schema';

const app = express();

const serverConfig = config.server;
middlewares.forEach(mid => app.use(mid));

const server = new ApolloServer({
	resolvers,
	typeDefs,
	playground: {
		settings: {
			'editor.theme': 'dark',
			'editor.cursorShape': 'line'
		} as unknown
	},
	tracing: true
});

server.applyMiddleware({ app, path: '/graphql' });

app.use('/', router);

app.listen(serverConfig.port, () => {
	console.log(`The server has started on port ${serverConfig.port}`);
});
