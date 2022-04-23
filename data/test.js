const { credentials, credentialsMain } = require('./connection.js');
const { Pool, Client } = require('pg');


const poolMain = new Pool(credentialsMain);
//instantiate pool with vain_db database
const pool = new Pool(credentials);
