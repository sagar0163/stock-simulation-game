const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/yourdbname';

function connect() {
  return mongoose.connect(DB_URI);
}

module.exports = { connect };
