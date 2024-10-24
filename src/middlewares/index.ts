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
import cookieParser from 'cookie-parser';
import express from 'express';
import fileUpload from 'express-fileupload';
import * as helmet from 'helmet';

import {
	BodyParserMiddleware,
	BodyParserUrlencodedMiddleware
} from './body-parser';
import { Compression } from './compression';
import { Morgan } from './morgan';
import { Session } from './session';

export type NextHandleFunction = (
	req?: express.Request,
	res?: express.Response,
	next?: express.NextFunction
) => void;

export const middlewares = [
	BodyParserMiddleware,
	BodyParserUrlencodedMiddleware,
	cookieParser(),
	Compression,
	helmet.noSniff(),
	helmet.hsts({
		maxAge: 518400
	}),
	Morgan,
	fileUpload(),
	express.json({ limit: '50mb' }),
	express.urlencoded({ extended: true, limit: '50mb' }),
	Session
] as NextHandleFunction[];
