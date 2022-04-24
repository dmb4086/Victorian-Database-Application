const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'devbhatt',
	host: 'localhost',
	database: 'public',
	password: 'password',
	port: 5432,
});

module.exports = pool;
