'use strict';

module.exports = {
	hooks: {
		'pre-push': 'yarn audit',
		'pre-commit': 'lint-staged',
		'commit-msg':
			'commitlint -e $HUSKY_GIT_PARAMS --config ./tools/commitlint-config.js'
	}
};