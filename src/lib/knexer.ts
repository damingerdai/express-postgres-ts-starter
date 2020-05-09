import * as Knex from 'knex';
import { PartialWithArray } from './util';

export class Knexer<T> {

	private db: Knex;
	protected tableName: string;

	constructor(db: Knex, tableName: string) {
		this.db = db;
		this.tableName = tableName;
	}

	public async create(value: Partial<T> = {}) {
		const records = this.raw().insert(value).returning('*');
		if (records && records[0]) {
			return records[0]
		} else {
			return null;
		}
	}

	public async findOne(selectors: PartialWithArray<T> = {}): Promise<T> {
		const query = this.manyQuery(selectors).first();

		return query;
	}

	public async findMany(selectors: PartialWithArray<T> = {}): Promise<T[]> {
		const query = this.manyQuery(selectors);

		return query;
	}

	protected manyQuery(selectors: PartialWithArray<T> = {}, knex: Knex = null): Knex.QueryBuilder {
		if (!knex) knex = this.db;

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
