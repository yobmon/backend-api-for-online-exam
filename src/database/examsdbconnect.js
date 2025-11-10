const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
  host: 'localhost',     
  user: 'root',          
  password: 'password',  
  database: 'exam'   
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to MySQL:', err);
    return;
  }
  console.log('✅ Connected to MySQL!');
});

connection.end();
