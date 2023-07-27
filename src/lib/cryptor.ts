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
import * as crypto from 'crypto';

export const md5 = (data: string): string => {
	const hash = crypto.createHash('md5');
	hash.update(data);

	return hash.digest('hex');
};

export const sha1 = (data: string): string => {
	const hash = crypto.createHash('sha1');
	hash.update(data);

	return hash.digest('hex');
};

export const hmac = (data: string, key: string): string => {
	const hmacsha256 = crypto.createHmac('sha256', key);
	hmacsha256.update(data);

	return hmacsha256.digest('hex');
};
