const { pool, Client } = require('pg');

const client = new Client({
    user: '',
    host: '',
    database: '',
    password: '',
});

client.connect();

module.exports = client;
