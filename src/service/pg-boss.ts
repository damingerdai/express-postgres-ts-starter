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
import PgBoss from 'pg-boss';
import { config } from '../config';
import { logger } from '../lib/logger';

const { user, password, host, port, database: dbName } = config.db.connection;

const connectionString = `postgres://${user}:${password}@${host}:${port}/${dbName}`;

export const boss = new PgBoss(connectionString);

boss.on('error', error => console.error(error));

export const initializePgBoss = async (): Promise<void> => {
	try {
		await boss.start();
		logger.info('[pg-boss] pg-boss is ready', {
			component: 'pg-boss',
			correlationId: 'n/a'
		});
	} catch (err) {
		logger.error(`[pg-boss] initializePgBoss ${err.message}`, {
			component: 'pg-boss',
			correlationId: 'n/a',
			details: {
				connectionString,
				message: err.message,
				stack: err.stack,
				err
			}
		});
		throw err;
	}
};
