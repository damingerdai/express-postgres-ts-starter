'use strict';

exports.up = knex =>
	knex.schema.createTable('users', table => {
		table
			.uuid('id')
			.notNullable()
			.primary()
			.defaultTo(knex.raw('gen_random_uuid()'));

		table.string('name').notNullable();
		table.integer('age').notNullable();
	});

exports.down = knex => knex.schema.dropTable('users');
