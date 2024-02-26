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
/**
 * Converts a UTC time string to a specified timezone.
 *
 * @param {string} utcTimeString - The UTC time string to convert.
 * @param {string} targetTimezone - The IANA timezone identifier (e.g., "America/New_York").
 * @returns {string} The formatted time string in the target timezone.
 */
export function convertUTCTimeToTimezone(utcTimeString, targetTimezone) {
	// Parse the UTC time string to a Date object
	const date = new Date(utcTimeString);

	// Use Intl.DateTimeFormat to format the date in the target timezone
	const formatter = new Intl.DateTimeFormat('en-US', {
		timeZone: targetTimezone,
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	});

	// Format the date
	const formattedDate = formatter.format(date);

	return formattedDate;
}
