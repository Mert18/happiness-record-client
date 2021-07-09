const {Pool} = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'hach',
  host: 'localhost',
  port: 5432,
  database: 'wih'
});

module.exports = pool;
