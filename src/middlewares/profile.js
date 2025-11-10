
app.get('/profile/:stdentId', async (req, res) => {
  const studentID = req.params.userId;
  const [rows] = await pool.query('SELECT id, username, email FROM student WHERE id = ?', [studentID]);
  return res.json(rows[0]);
});


function requireLogin(req, res, next) {
  if (!req.session || !req.session.userId) return res.status(401).send('login required');
  next();
}

// function requireLogin(req, res, next) {
//   if (!req.session || !req.session.studentid) return res.status(401).send('login required');
//   next();
// }

// app.get('/profile/:studentid', requireLogin, async (req, res) => {
//   const userid = Number(req.params.studentid);
//   if (req.session.userId !== userId && !req.session.isAdmin) {
//     return res.status(403).send('forbidden');
//   }
//   const [rows] = await pool.query('SELECT id, username, email FROM users WHERE id = ?', [userId]);
//   res.json(rows[0]);
// });