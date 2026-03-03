import { config } from 'dotenv';
import { Pool } from 'pg';

config();

const procEnv = process.env.DATABASE_URL;

if (!procEnv) {
    throw new Error('DATABASE_URL environment variable is not set');
}

export const pool = new Pool({
    connectionString: procEnv,
    ssl: {
        rejectUnauthorized: false
    }
});