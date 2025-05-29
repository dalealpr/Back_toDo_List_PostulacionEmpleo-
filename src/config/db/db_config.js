import dotenv from 'dotenv';

const dbType = process.env.DB_TYPE || 'sqlite';
dotenv.config({ path: `.env.${dbType}` });

let  connectDB;

if (dbType === 'postgres') {
  connectDB = (await import('./connect_postgres.js')).initPostgres;
} else {
  connectDB = (await import('./connect_sqlite.js')).initSQLite;
}

export default connectDB;
