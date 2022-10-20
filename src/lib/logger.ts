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
import winston, { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize, json } = format;

const APP_LABEL = process.env.APP_LABEL ?? 'express-postgres-ts-starter';
const isProduction = process.env.NODE_ENV === 'production';

interface DefaultLogProps {
	label: string;
}

const lokiFormatter = (
	defaultLabels: DefaultLogProps
): winston.Logform.Format => {
	return combine(
		timestamp(),
		format(info => ({ ...info, ...defaultLabels }))(),
		json()
	);
};

export const localFormatter = (
	defaultLabels: DefaultLogProps
): winston.Logform.Format => {
	return combine(
		timestamp(),
		colorize(),
		printf(msg => {
			const { timestamp, level, message, ...logObject } = msg;
			const { label: appLabel, ...defaultRest } = defaultLabels;
			return `[${level}] ${timestamp} ${appLabel}: ${message} ${
				logObject ? JSON.stringify({ ...logObject, ...defaultRest }, null, 2) : ''
			}`;
		})
	);
};

const defaultLogger = isProduction
	? createLogger({
		level: 'info',
		format: lokiFormatter({
			label: APP_LABEL
		}),
		transports: [new transports.Console()]
	  })
	: createLogger({
		level: 'debug',
		format: localFormatter({ label: APP_LABEL }),
		transports: [new transports.Console()]
	  });

export const logger = defaultLogger;
