const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Viki0975',
  database: 'express_mysql'
});

db.connect((err) => {
  if (err) {
    console.log('DB connection failed:', err);
  } else {
    console.log('MySQL Connected');
  }
});

module.exports = db;
