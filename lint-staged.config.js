module.exports = {
	'*.{md,json,yml,js,ts,}': filenames => {
		const prettier = `prettier --write -- ${filenames.join(' ')}`;
		const git = `git add ${filenames.join(' ')}`;
		return [prettier, git];
	}
};
