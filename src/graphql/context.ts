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
import { Request } from 'express';
import { fileService, IServices, UserService } from '../service';
import { redisService } from '../lib/redis';
import { IRepositories, repositories } from '../repositories';
import { Knex } from 'knex';

export type IContext = IRepositories &
	IServices & { request: Request; db: Knex };

export const contextBuilder = (request: Request): IContext => {
	const userService = new UserService(repositories.userRepository);
	return {
		request,

		...repositories,
		fileService,
		redisService,
		userService
	};
};
