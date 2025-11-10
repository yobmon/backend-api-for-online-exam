const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
  host: 'localhost',     // your MySQL host
  user: 'root',          // your MySQL username
  password: 'password',  // your MySQL password
  database: 'studentdb'    // your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to MySQL:', err);
    return;
  }
  console.log('✅ Connected to MySQL!');
});

// Example query
// Close connection (optional)
connection.end();
