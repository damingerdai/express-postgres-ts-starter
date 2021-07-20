import { camelCase, snakeCase } from '../change-case';

describe('change case', () => {
	test('camelCase', () => {
		expect(camelCase(null)).toBeNull();
		expect(camelCase(undefined)).toBeUndefined();
		expect(camelCase(['A', 'b'])).toStrictEqual(['a', 'b']);
		expect(camelCase({ A: 'a', b: 'B' })).toEqual({ a: 'a', b: 'B' });
		expect(camelCase('AbC')).toBe('abC');
		expect(camelCase('Foo Bar')).toBe('fooBar');
		expect(camelCase('--foo-Bar--')).toBe('fooBar');
		expect(camelCase('__FOO_BAR__')).toBe('fooBar');
	});
	test('snakeCase', () => {
		expect(camelCase(null)).toBeNull();
		expect(camelCase(undefined)).toBeUndefined();
		expect(snakeCase('Foo Bar')).toBe('foo_bar');
		expect(snakeCase('--foo-Bar--')).toBe('foo_bar');
		expect(snakeCase('__FOO_BAR__')).toBe('foo_bar');
	});
});
