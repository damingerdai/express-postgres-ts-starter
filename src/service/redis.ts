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
