// loginController.js
const { authenticate } = require('../services/loginService');

const login = (req, res) => {
  const { username, password } = req.body;
  const user = authenticate(username, password);
  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
};

module.exports = { login };
