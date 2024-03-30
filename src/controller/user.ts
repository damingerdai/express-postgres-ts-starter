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

import { Request, Response } from 'express';
import { contextBuilder } from '../graphql/context';
import { ICreateUserInput } from '../types/user';

export const create = async (req: Request, res: Response) => {
	const context = contextBuilder(req);
	const { userService } = context;
	const input = req.body as ICreateUserInput;
	const result = await userService.createUser(input);
	res.status(200).json({
		success: true,
		data: result
	});
};

export const get = async (req: Request, res: Response) => {
	const context = contextBuilder(req);
	const { userService } = context;
	const id = req.params.id;
	const result = await userService.getUser(id);
	res.status(200).json({
		success: true,
		data: result
	});
};
