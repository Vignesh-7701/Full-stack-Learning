const db = require('mysql2');

const connection = db.createConnection({
    host : process.env.host,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((err)=>{
    if(err){
        console.error('DB connection failed');
    }
    else{
        console.log('DB connected successfully'); 
    }
})

module.exports = connection.promise();