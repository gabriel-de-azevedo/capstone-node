import dotenv from 'dotenv';
import express from 'express';
import { routers } from './routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(routers);

export { app };
