const alunoModel = require('../models/alunoModel');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'teste_escola',
    port:'3308',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

(async ()=>{
    try {
        const connection = await pool.getConnection();
        console.log(`Conectado ao MySQL`);
        connection.release();
    } catch (error) {
        console.error(error);

    }
})();

module.exports = pool;