import { camelCase, snakeCase } from 'src/lib';

const specialChars = ['*'];

const convertToCase = (val, func) => {
	if (specialChars.includes(val)) {
		return val;
	}

	return func(val);
};

export const config = {
	db: {
		charset: 'utf8',
		client: 'pg',
		connection: {
			database:
				process.env.NODE_ENV === 'test'
					? 'postgres_test'
					: process.env.POSTGRES_DB_NAME || 'postgres',
			host: process.env.POSTGRES_HOST || 'db',
			password: process.env.POSTGRES_PASSWORD,
			port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
			user: process.env.POSTGRES_USER || 'postgres'
		},
		debug: process.env.DEBUG || false,
		pool: {
			max: parseInt(process.env.POSTGRES_POOL_MAX, 10) || 10,
			min: parseInt(process.env.POSTGRES_POOL_MIN, 10) || 2
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types,  no-unused-vars
		postProcessResponse: (result, queryContext) => convertToCase(result, camelCase),
		// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types,  no-unused-vars
		wrapIdentifier: (value, origImpl, queryContext) => origImpl(convertToCase(value, snakeCase))
	},
	server: {
		port: process.env.APP_PORT || 3000,
		router: {
			caseSensitive: false,
			mergeParams: false,
			strict: false
		}
	}
};
