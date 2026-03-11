// loginService.js
const users = [
  { username: 'testuser', password: 'testpass' },
  { username: 'demouser', password: 'demopass' }
];

function authenticate(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  return user ? { username: user.username } : null;
}

module.exports = { authenticate };
