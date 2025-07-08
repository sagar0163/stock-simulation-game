// Main server file for Stock Simulation Game Backend
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// Import session middleware, routes, and db config from api folder
const sessionMiddleware = require('./api/Middleware/sessionMiddleware');
const routes = require('./api/routes');
const db = require('./api/config/db');

const app = express();
const PORT = process.env.PORT;

// Connect to database
db.connect()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(sessionMiddleware);

// API routes
app.use('/', routes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Stock Simulation Game Backend is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
