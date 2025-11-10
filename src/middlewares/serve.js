


app.get('/search', (req, res) => {
  const q = req.query.q || '';
  res.send(<html><body>Results for: ${q}</body></html>); // BAD
});


// const escapeHtml = (s) => s.replace(/[&<>"']/g, c => ({
//   '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
// }[c]));

// app.get('/search', (req, res) => {
//   const q = req.query.q || '';
//   res.send(<html><body>Results for: ${escapeHtml(q)}</body></html>); // safer
// });
// this is the fixed version of the above code