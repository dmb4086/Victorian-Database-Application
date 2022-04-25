const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'devbhatt',
	host: 'localhost',
	database: 'vain',
	password: 'password',
	port: 5432,
});

module.exports = pool;
