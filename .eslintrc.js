/* eslint-disable sort-keys */
module.exports = {
	env: {
		es6: true,
		node: true,
		jest: true
	},
	extends: [
		'eslint:recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			modules: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		// eslint:recommended
		'no-await-in-loop': 'error',

		// Best Practices
		'array-callback-return': ['error', { allowImplicit: true }],
		complexity: ['error', 30],
		curly: 'error',
		'default-case': 'error',
		'dot-location': ['error', 'property'],
		eqeqeq: ['error', 'always'],
		'guard-for-in': 'error',
		'max-classes-per-file': ['error', 20],
		'no-alert': 'error',
		'no-caller': 'error',
		'no-else-return': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'warn',
		'no-implicit-globals': 'warn',
		'no-implied-eval': 'error',
		'no-multi-spaces': 'error',
		'no-useless-return': 'error',
		'no-warning-comments': [
			'error',
			{ terms: ['todo', 'fixme', 'any other term'], location: 'anywhere' }
		],
		'no-with': 'error',
		'prefer-named-capture-group': 'warn',
		'prefer-promise-reject-errors': 'error',
		radix: 'error',
		'require-await': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-unused-vars': 'error',
		'no-use-before-define': 'error',

		// Nodejs
		'callback-return': 'error',
		'no-buffer-constructor': 'error',
		'no-sync': 'error',

		// Stylistic Issues
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': ['error', 'never'],
		'block-spacing': 'error',
		'brace-style': 'error',
		camelcase: 'error',
		'capitalized-comments': 'error',
		'comma-dangle': [
			'error',
			{
				arrays: 'never',
				objects: 'never',
				imports: 'never',
				exports: 'never',
				functions: 'never'
			}
		],
		'comma-spacing': ['error', { before: false, after: true }],
		'computed-property-spacing': ['error', 'never'],
		'consistent-this': ['error', 'that'],
		'eol-last': ['error', 'always'],
		'func-call-spacing': ['error', 'never'],
		'func-name-matching': ['error', 'always'],
		'func-names': ['warn', 'as-needed'],
		// "id-match": ["error", "^(_?)[a-z]+([A-Z][a-z]+)*$"], need more time
		'implicit-arrow-linebreak': ['error', 'beside'],
		indent: ['error', 'tab'],
		'max-len': [
			'error',
			{
				code: 120,
				comments: 200,
				ignoreUrls: true,
				ignoreTemplateLiterals: true
			}
		],
		'max-lines': [
			'error',
			{ max: 500, skipBlankLines: true, skipComments: true }
		],
		'max-lines-per-function': [
			'error',
			{ max: 120, skipComments: true, skipBlankLines: true }
		],
		'max-params': ['error', 10],
		'max-statements-per-line': ['error', { max: 1 }],
		'multiline-comment-style': ['error', 'starred-block'],
		'no-array-constructor': 'error',
		'no-inline-comments': 'error',
		'no-lonely-if': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-plusplus': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'semi-spacing': ['error', { before: false, after: true }],
		'semi-style': ['error', 'last'],
		// 'sort-keys': 'error',
		'sort-vars': 'error',
		'space-before-blocks': 'error',
		/*
		 * "space-before-function-paren": ["error", {
		 *     "anonymous": "always",
		 *     "named": "always",
		 *     "asyncArrow": "always"
		 * }],
		 */
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': ['error', { int32Hint: false }],
		'space-unary-ops': [
			2,
			{
				words: true,
				nonwords: false,
				overrides: {
					new: false,
					'++': true
				}
			}
		],
		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					markers: ['/'],
					exceptions: ['-', '+']
				},
				block: {
					markers: ['!'],
					exceptions: ['*'],
					balanced: true
				}
			}
		],
		'switch-colon-spacing': ['error', { after: true, before: false }],
		'template-tag-spacing': ['error', 'never'],

		// ECMAScript 6
		'no-const-assign': 'error',
		'no-var': 'error',

		// Typescript eslint
		'@typescript-eslint/explicit-function-return-type': 'off'
	}
};
