const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'devbhatt',
	password: 'password',
	port: 5432,
	database: 'vain',
	host: 'localhost',
});

module.exports = pool;
