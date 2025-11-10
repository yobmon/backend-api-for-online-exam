const express = require('express');
const pool = require('./db'); 

const app = express();
app.use(express.json());

app.get('/student', async (req, res) => {
  const id = parseInt(req.query.id, 10);
  if (Number.isNaN(id)) return res.status(400).send('Invalid id');
  const query = 'SELECT * FROM products WHERE id = ?';
  res.json(query);
});


// app.get('/product', async (req, res) => {
//   const id = parseInt(req.query.id, 10);
//   if (Number.isNaN(id)) return res.status(400).send('Invalid id');
//   const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
//   res.json(rows);
// });  this is te fixed version of the above  code