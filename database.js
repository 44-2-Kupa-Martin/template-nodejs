import mysql from "mysql2/promise";

const dbConfig = {
    user: process.env.DB_USER ?? 'n260m_35091113',
    password: process.env.DB_PASSWORD ?? 'test1234',
    database: process.env.DB_NAME ?? 'Empresa',
    host: process.env.DB_HOST ?? 'sql200.260mb.net',
    port: process.env.DB_PORT ?? '3306'
};

export default await mysql.createConnection(dbConfig);