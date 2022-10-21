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
import { RedisClientType } from 'redis';

export class RedisService {
	constructor(private redisClient: RedisClientType<any>) {
		this.redisClient = redisClient;
	}

	public on(event: string | symbol, listener: (...args: any[]) => void): void {
		this.redisClient.on(event, listener);
	}

	public getRedisValue(key: string): Promise<string> {
		return this.redisClient.get(key);
	}

	public setRedisValue(
		key: string,
		value: string,
		timeOut?: number
	): Promise<string> {
		return timeOut
			? this.redisClient.set(key, value, { EX: timeOut })
			: this.redisClient.set(key, value);
	}

	public deleteRedisValue(key: string): Promise<number> {
		return this.redisClient.del(key);
	}

	public setExpire(key: string, value: number): Promise<boolean> {
		return this.redisClient.expire(key, value);
	}

	public incrRedisValue(key: string): Promise<number> {
		return this.redisClient.incr(key);
	}

	public decrRedisValue(key: string): Promise<number> {
		return this.redisClient.decr(key);
	}
}
