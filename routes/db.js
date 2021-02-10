/*
* Conexión a MySQL
 */

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'kify',
    password: 'charlie7',
    database: 'todos',
    port: 8889,
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connectado!');
});
module.exports = connection;
