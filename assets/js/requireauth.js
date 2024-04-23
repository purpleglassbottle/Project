const express = require('express');
const app = express();

// Middleware to protect the route
app.use('/session', requireAuth);

app.get('/session', (req, res) => {
  res.sendFile(__dirname + '/session.html'); // Serve session page only if user is logged in
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html'); // Serve login page
});

// Initialize server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});