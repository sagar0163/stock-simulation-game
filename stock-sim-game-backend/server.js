// Main server file for Stock Simulation Game Backend
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import session middleware, routes, and db config from api folder
const sessionMiddleware = require('./api/Middleware/sessionMiddleware');
const routes = require('./api/routes');
const db = require('./api/config/db');

const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000

// Connect to database (optional - server works without DB)
if (process.env.DB_URI && process.env.DB_URI !== 'mongodb://localhost:27017/yourdbname') {
  db.connect()
    .then(() => console.log('Database connected'))
    .catch((err) => console.error('Database connection error:', err));
} else {
  console.log('Running without database (DB_URI not configured)');
}

// Middleware
app.use(cors());
app.use(express.json()); // Use express.json() instead of bodyParser.json()
app.use(express.urlencoded({ extended: true })); // Use express.urlencoded() instead of bodyParser.urlencoded()
app.use(sessionMiddleware);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Stock Simulation Game Backend is running');
});

// API routes - placed after root endpoint to ensure it doesn't override "/"
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
