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
module.exports = {
	'*.{md,json,yml,js,ts,}': filenames => {
		const prettier = `prettier --write -- ${filenames.join(' ')}`;
		const git = `git add ${filenames.join(' ')}`;
		return [prettier, git];
	},
	'**/*.(j|t)s?(x)': filenames => filenames.length > 10
		? 'yarn eslint:ts --fix'
		: `eslint --format stylish ${filenames.join(' ')} --fix`
};
