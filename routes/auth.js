const express = require('express');
const router = express.Router();

// Serve login page (no authentication required)
router.get('/login', (req, res) => {
  res.sendFile(__dirname + '/../public/login.html'); // Serve login page
});

// Endpoint for user login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = [ /* Example user data */ ];
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    req.session.user = user; // Establish session
    res.redirect('/protected/session'); // Redirect to session page or other protected page
  } else {
    res.status(401).send('Invalid credentials'); // Unauthorized
  }
});

module.exports = router;