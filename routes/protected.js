const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/auth'); // Import the authentication middleware

// Example of applying the middleware to protect the session page
router.get('/session', requireAuth, (req, res) => {
  res.sendFile(__dirname + '/../public/session.html'); // Serve the protected session page
});

// Protecting the musicians page with the authentication middleware
router.get('/musicians', requireAuth, (req, res) => {
  res.sendFile(__dirname + '/../public/musicians.html');
});

module.exports = router; // Export the router with protected routes