import { createClient } from 'redis';
import { RedisService } from 'src/service/redis';
import { config } from '../config';
import { logger } from './logger';

export const redisClient = createClient({
	socket: {
		host: config.redis.host,
		port: parseInt(config.redis.port, 10),
		passphrase: config.redis.pass
	}
});

redisClient.connect();

redisClient.on('connect', () => {
	logger.debug('RedisClient connected to redis successfully.');
});

redisClient.on('error', err => {
	logger.error('Could not establish a connection with redis. ' + err);
});

export const redisService = new RedisService(redisClient as any);
