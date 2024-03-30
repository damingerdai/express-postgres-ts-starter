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
import { Knexer } from '../lib';
import { IUser } from '../types/user';

export class UserRepository {
	private knexer: Knexer<IUser & { createdAt: Date; updatedAt: Date }>;

	constructor(db: Knex) {
		this.knexer = new Knexer(db, 'users');
	}

	public async create(username: string, password: string): Promise<IUser> {
		const user = await this.knexer.create({
			username: username,
			password: password,
			createdAt: new Date(),
			updatedAt: new Date()
		});

		return user;
	}

	public async get(id: string): Promise<IUser> {
		const user = await this.knexer.findOne({ id: id });

		return user;
	}
}
