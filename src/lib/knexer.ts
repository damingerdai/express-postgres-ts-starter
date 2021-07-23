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
import { Knex } from 'knex';
import { PartialWithArray } from './util';

export class Knexer<T> {
	private db: Knex;
	protected tableName: string;

	constructor(db: Knex, tableName: string) {
		this.db = db;
		this.tableName = tableName;
	}

	public async create(value: Partial<T> = {}): Promise<T> {
		const records = await this.raw().insert(value).returning('*');
		if (records && records[0]) {
			return records[0];
		}
		return null;
	}

	public findOne(selectors: PartialWithArray<T> = {}): Promise<T> {
		const query = this.manyQuery(selectors).first();

		return query;
	}

	public findMany(selectors: PartialWithArray<T> = {}): Promise<T[]> {
		const query = this.manyQuery(selectors);

		return query;
	}

	protected manyQuery(
		selectors: PartialWithArray<T> = {},
		knex: Knex = null
	): Knex.QueryBuilder {
		if (!knex) {
			knex = this.db;
		}

		let query = knex(this.tableName);

		Object.keys(selectors).forEach(k => {
			if (Array.isArray(selectors[k])) {
				query = query.whereIn(k, selectors[k]);
			} else {
				query = query.where(k, selectors[k]);
			}
		});

		return query;
	}

	protected raw(): Knex.QueryBuilder {
		return this.db(this.tableName);
	}
}
