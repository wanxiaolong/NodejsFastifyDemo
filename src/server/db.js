import sql from 'mssql'
import logger from './logger.js'
import config from 'config'

const dbConfig = {
    user: config.db.username,
    password: config.db.password,
    server: config.db.hostname,
    database: config.db.name,
    options: {
        encrypt: false,
        enableArithAbort: true
    }
};

export const getConnection = async() => {
    try {
        logger.info('connecting DB ...')
        const pool = await sql.connect(dbConfig);
        logger.info('connected DB.')
        return pool;
    } catch (error) {
        logger.error('Database connection failed: ', error);
        throw error;
    }
}
