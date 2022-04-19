import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config();

const developmentEnv = {
  type: 'postgres',
  host: 'capstone-postgres',
  port: 5432,
  username: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, '../entities/**/*.*')],
  migrations: [path.join(__dirname, '../migrations/**/*.*')],
  cli: {
    entitiesDir: path.join(__dirname, '../entities'),
    migrationsDir: path.join(__dirname, '../migrations'),
  },
};

const productionEnv = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [path.join(__dirname, '../entities/**/*.*')],
  migrations: [path.join(__dirname, '../migrations/**/*.*')],
  cli: {
    entitiesDir: path.join(__dirname, '../entities'),
    migrationsDir: path.join(__dirname, '../migrations'),
  },
  ssl: { rejectUnauthorized: false },
};

const dbOptions =
  process.env.NODE_ENV === 'production' ? productionEnv : developmentEnv;

export default dbOptions as ConnectionOptions;
