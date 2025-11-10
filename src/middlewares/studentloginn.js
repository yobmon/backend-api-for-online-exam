const express = require('express');
const pool = require('./db');
const app = express();
app.use(express.urlencoded({ extended: false }));

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await pool.query("SELECT id, password FROM users WHERE username='${username}'"); // vulnerable
  if (rows.length && rows[0].password === password) { // storing plain passwords
    // naive session cookie:
    res.cookie('sess', "${rows[0].id}:${username}"); // predictable
    return res.send('ok');
  }
  res.status(401).send('unauth');
});
// or normal login



// const bcrypt = require('bcrypt');
// const session = require('express-session');

// app.use(session({
//   secret: process.env.SESSION_SECRET || 'change-me',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { httpOnly: true, secure: false, sameSite: 'lax' } // secure:true in prod (HTTPS)
// }));

// app.post('/login', express.urlencoded({ extended: false }), async (req, res) => {
//   const { username, password } = req.body;
//   const [rows] = await pool.query('SELECT id, password_hash FROM users WHERE username = ?', [username]);
//   if (!rows.length) return res.status(401).send('unauth');

//   const user = rows[0];
//   const ok = await bcrypt.compare(password, user.password_hash);
//   if (!ok) return res.status(401).send('unauth');

//   req.session.userId = user.id; // server-side session
//   return res.send('ok');
// });
   // this is the fixed version of the above code