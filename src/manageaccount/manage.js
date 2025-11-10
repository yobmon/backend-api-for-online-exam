
// naive: changes password via POST, no CSRF tokens
app.post('/account/password', express.urlencoded({ extended:false }), requireLogin, async (req, res) => {
  const { newPassword } = req.body;
  await pool.query('UPDATE users SET password_hash = ? WHERE id = ?', [newPassword, req.session.userId]);
  res.send('ok');
});





// const csrf = require('csurf');
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
// const csrfProtection = csrf({ cookie: true });

// app.get('/account/password', requireLogin, csrfProtection, (req, res) => {
//   res.send(<form method="POST"><input type="hidden" name="_csrf" value="${req.csrfToken()}"><input name="newPassword"></form>);
// });

// app.post('/account/password', requireLogin, express.urlencoded({ extended:false }), csrfProtection, async (req, res) => {
//   const newPassword = req.body.newPassword;
//   const hash = await bcrypt.hash(newPassword, 12);
//   await pool.query('UPDATE users SET password_hash = ? WHERE id = ?', [hash, req.session.userId]);
//   res.send('ok');
// });    this is the fixed version of the above code