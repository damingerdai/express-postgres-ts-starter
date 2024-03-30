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
import * as jwt from 'jsonwebtoken';
import { config } from '../config';

const { jwt: jwtConfig } = config;

export const encrypt = (
	username: string,
	password: string
): Promise<string> => {
	const q = (resolve, reject) => {
		const params = { expiresIn: jwtConfig.ttl, algorithm: jwtConfig.algorithm };
		jwt.sign({ username, password }, jwtConfig.secret, params, (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	};

	return new Promise(q);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const decrypt = (token: string): Promise<any> => {
	const q = (resolve, reject) => {
		jwt.verify(
			token,
			jwtConfig.secret,
			{ algorithms: [jwtConfig.algorithm] },
			(err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			}
		);
	};

	return new Promise(q);
};
