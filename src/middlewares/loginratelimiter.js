app.post('/login', async (req, res) => {
  // ... authentication code
});

// const rateLimit = require('express-rate-limit');
// const winston = require('winston');

// const logger = winston.createLogger({ transports: [new winston.transports.Console()] });

// const loginLimiter = rateLimit({
//   windowMs: 15*60*1000, max: 10, message: 'Too many login attempts'
// });

// app.post('/login', loginLimiter, express.urlencoded({ extended:false }), async (req, res) => {
//   const { username } = req.body;
//   logger.info('login_attempt', { username, ip: req.ip, time: new Date().toISOString() });
//   // on success/fail, log outcome:
//   // logger.info('login_success', {...}) or logger.warn('login_failed', {...})
// });
// login with secure sessions
