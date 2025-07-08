// api/Middleware/sessionMiddleware.js
const session = require('express-session');

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
});

module.exports = sessionMiddleware;