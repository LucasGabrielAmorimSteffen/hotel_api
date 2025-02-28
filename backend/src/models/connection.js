const { Pool } = require('pg')
require('dotenv').config();

const connection = new Pool ({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD, 
    port: process.env.PG_PORT,
    database: process.env.PG_DB,
});

module.exports = connection;