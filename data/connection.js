const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	password: 'password',
	port: 5432,
	database: 'public',
	host: 'localhost',
});

module.exports = pool;
