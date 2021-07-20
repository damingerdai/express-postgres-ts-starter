'use strict';

const users = require(`./data/users.json`);

exports.seed = async knex => {
	await knex('users').insert(users);
};
