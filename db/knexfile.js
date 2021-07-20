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
		database:
			process.env.NODE_ENV === 'test'
				? 'postgres_test'
				: process.env.POSTGRES_DB_NAME || 'postgres'
	},
	migrations: {
		tableName: '_migrations',
		directory: './migrations'
	},
	seeds: {
		directory: './seeds'
	}
};
