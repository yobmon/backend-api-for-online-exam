


const query =await pool.query('INSERT INTO payments (user_id, cc_number) VALUES (?, ?)', [userId, ccNumber]);
// Secure fix — use parameterized queries to prevent SQL injection

// const query = 'INSERT INTO payments (user_id, cc_number) VALUES (' + userId + ', ' + ccNumber + ')';
// this is the fixed version of the above code


// const crypto = require('crypto');
// const algorithm = 'aes-256-gcm';
// const masterKey = process.env.MASTER_KEY; // store in KMS, not in env in prod

// function encrypt(text) {
//   const iv = crypto.randomBytes(12);
//   const cipher = crypto.createCipheriv(algorithm, Buffer.from(masterKey, 'hex'), iv);
//   let enc = cipher.update(text, 'utf8', 'hex');
//   enc += cipher.final('hex');
//   const tag = cipher.getAuthTag().toString('hex');
//   return ${iv.toString('hex')}:${enc}:${tag};
// }

// function decrypt(payload) {
//   const [ivHex, enc, tagHex] = payload.split(':');
//   const decipher = crypto.createDecipheriv(algorithm, Buffer.from(masterKey, 'hex'), Buffer.from(ivHex, 'hex'));
//   decipher.setAuthTag(Buffer.from(tagHex, 'hex'));
//   let dec = decipher.update(enc, 'hex', 'utf8');
//   dec += decipher.final('utf8');
//   return dec;
// }

// // usage:
// const encrypted = encrypt(ccNumber);
// await pool.query('INSERT INTO payments (user_id, cc_enc) VALUES (?, ?)', [userId, encrypted]);
// this is the fixed version of the above code