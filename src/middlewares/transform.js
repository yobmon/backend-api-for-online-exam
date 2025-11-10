
app.post('/transform', express.json(), (req, res) => {
  const fnBody = req.body.fn; // user-supplied JS code
  const fn = eval(({fnBody})); // EXTREMELY DANGEROUS
  const result = fn({ foo: 'bar' });
  res.json(result);
});


// const allowedTransforms = {
//   getFoo: () => ({ foo: 'bar' }),
//   // other safe transforms
// };

// app.post('/transform', express.json(), (req, res) => {
//   const op = req.body.op;
//   if (!allowedTransforms[op]) return res.status(400).send('invalid op');
//   res.json(allowedTransforms[op]());
// });
// this is the fixed version of the above code