'use strict';

exports.up = knex => knex.raw('CREATE EXTENSION IF NOT EXISTS "pgcrypto"');

exports.down = knex => knex.raw('DROP EXTENSION IF EXISTS "pgcrypto"');
