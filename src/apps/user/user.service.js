import { getConnection } from '../../server/db.js'
import sql from 'mssql'

export const getUserById = async (userId) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input('userId', sql.Int, userId)
        .query('SELECT * FROM "user" WHERE id = @userId');
    return result.recordset[0];
}