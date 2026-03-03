import express, { Request, Response } from 'express';
import cors from 'cors';
import { pool } from './config/db.pg';
import { log } from 'node:console';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(
            'SELECT NOW() as current_time'
        );

        res.json({
            ok:true,
            message:'API Mono Beauty connected to PostgreSQL',
            time: result.rows[0].current_time
        });
    } catch (error) {
        console.error('Database connection error: ', error);
        res.status(500).json({ok: false, error: 'Database unavailable'});
    }
});

app.listen(PORT, () => {
    console.log(`[Server]: API Mono Beauty running on port ${PORT}`);
});