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
