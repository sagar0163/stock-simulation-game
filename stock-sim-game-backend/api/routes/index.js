// api/routes/index.js
const express = require('express');
const router = express.Router();



// Index all route files here
const loginRoutes = require('./loginRoutes');
router.use('/', loginRoutes);

module.exports = router;