'use strict';

exports.seed = async knex => {
	const blacklist = ['_migrations', '_migrations_lock'];
	const data = await knex.raw(
		"SELECT tablename FROM pg_tables WHERE schemaname='public'"
	);
	const tables = data.rows
		.map(table => table.tablename)
		.filter(table => blacklist.indexOf(table) < 0);

	return knex.raw(`TRUNCATE ${tables.join(',')} CASCADE`);
};
