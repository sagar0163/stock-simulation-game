// loginService.js
const users = [
  { username: 'admin', password: 'admin123' },
  { username: 'user', password: 'user123' }
];

function authenticate(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  return user ? { username: user.username } : null;
}

module.exports = { authenticate };
