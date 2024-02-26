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
import { convertUTCTimeToTimezone } from './date';
import { config } from '../config';

const { combine, timestamp, printf, colorize, json } = format;

const { server: serverConfig } = config;

const APP_LABEL = serverConfig.name;
const isProduction = serverConfig.isProduction;

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

const localFormatter = (
	defaultLabels: DefaultLogProps
): winston.Logform.Format => {
	return combine(
		timestamp(),
		colorize(),
		printf(msg => {
			const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
			const { timestamp, level, message, ...logObject } = msg;
			const timestampWithTimezone = convertUTCTimeToTimezone(timestamp, timeZone);
			const { label: appLabel, ...defaultRest } = defaultLabels;
			return `[${level}] ${timestamp}(${timestampWithTimezone}) ${appLabel}: ${message} ${
				logObject ? JSON.stringify({ ...logObject, ...defaultRest }, null, 2) : ''
			}`;
		})
	);
};

const formatter = isProduction ? lokiFormatter : localFormatter;

export const logger = createLogger({
	level: 'info',
	format: formatter({ label: APP_LABEL }),
	transports: [new transports.Console()]
});
