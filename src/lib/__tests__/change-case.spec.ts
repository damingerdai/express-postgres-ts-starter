/*
 *Copyright 2020 大明二代
 *
 *Licensed under the Apache License, Version 2.0 (the "License");
 *you may not use this file except in compliance with the License.
 *You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *Unless required by applicable law or agreed to in writing, software
 *distributed under the License is distributed on an "AS IS" BASIS,
 *WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *See the License for the specific language governing permissions and
 *limitations under the License.
 */
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
