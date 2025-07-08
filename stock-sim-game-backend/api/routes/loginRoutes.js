// loginRoutes.js
const express = require('express');
const router = express.Router();
const { loginController } = require('../controllers');

router.post('/login', loginController.login);

module.exports = router;
