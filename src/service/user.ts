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

import { UserRepository } from '../repositories/user';
import { ICreateUserInput, IUser } from '../types/user';

export class UserService {
	constructor(private userRepository: UserRepository) {}

	public createUser(user: ICreateUserInput): Promise<IUser> {
		return this.userRepository.create(user.username, user.password);
	}

	public getUser(id: string): Promise<IUser> {
		return this.userRepository.get(id);
	}
}
