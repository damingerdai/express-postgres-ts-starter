import * as _ from 'lodash';

const transform = (data, func) => {
	if (!data) {
		return data;
	} else if (Array.isArray(data)) {
		return data.map(elem => transform(elem, func));
	} else if (typeof data === 'object') {
		return _.mapKeys(data, (value, key) => transform(key, func));
	}
	return func(data);
};

export const camelCase = data => {
	return transform(data, _.camelCase);
};

export const snakeCase = data => {
	return transform(data, _.snakeCase);
};
