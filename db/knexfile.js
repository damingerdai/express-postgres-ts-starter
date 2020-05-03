module.exports = {
	charset: 'utf8',
	client: 'pg',
	debug: process.env.DEBUG === 'true' || false,
	pool: {
		min: parseInt(process.env.POSTGRES_POOL_MIN, 10) || 2,
		max: parseInt(process.env.POSTGRES_POOL_MAX, 10) || 10
	},
	connection: {
		host: process.env.POSTGRES_HOST || 'db',
		port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
		user: process.env.POSTGRES_USER || 'postgres',
		password: process.env.POSTGRES_PASSWORD || '12345',
		database: process.env.NODE_ENV === 'test' ? 'postgres_test' : (process.env.POSTGRES_DB_NAME || 'postgres')
	},
	migrations: {
		tableName: '_migrations',
		directory: './migrations'
	},
	seeds: {
		directory: './seeds'
	}
};
