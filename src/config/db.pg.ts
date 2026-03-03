require('dotenv').config();
const { Pool } = require('pg');

const procEnv = process.env.DATABASE_URL;

if (!procEnv) {
    throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new Pool({
    connectionString: procEnv,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = { pool };