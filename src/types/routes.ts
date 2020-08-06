import { Request, Response } from 'express';
import { Schema } from 'joi';

export interface ISchema {
	params?: Schema;
	query?: Schema;
	body?: Schema;
}

export interface IRoute {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
	path: string;
	schema?: ISchema;
	controller: (res: Request, req: Response) => void;
}

export type Routes = IRoute[];
