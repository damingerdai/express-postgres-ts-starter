import { Request } from 'express';

export const contextBuilder = (request: Request): unknown => {
	return {
		request
	};
};
