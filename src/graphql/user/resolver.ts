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
import { IContext } from '../context';

export const resolvers = {
	Mutation: {
		createUser: async (root, input, context: IContext) => {
			try {
				const { username, password } = input.user;
				const { userService } = context;
				const user = await userService.createUser({ username, password });
				return user;
			} catch (err) {
				console.error(err);
				throw err;
			}
		}
	}
};
