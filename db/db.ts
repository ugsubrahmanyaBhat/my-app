// lib/db/index.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const DB_CONFIG = {
  host: '139.59.23.64',
  port: '5432',
  database: 'postgres',
  user: 'postgres',
  password: 'postgres'
};

const connectionString = `postgres://${DB_CONFIG.user}:${DB_CONFIG.password}@${DB_CONFIG.host}:${DB_CONFIG.port}/${DB_CONFIG.database}`;

export const sql = postgres(connectionString);
export const db = drizzle(sql);