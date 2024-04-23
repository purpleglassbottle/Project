const express = require('express');
const router = express.Router();

// Apply authentication middleware to all routes in this file
const authMiddleware = require('../middleware/auth');

// Route to serve session page
router.get('/session', authMiddleware.requireAuth, (req, res) => {
  res.sendFile(__dirname + '/../public/session.html'); // Serve session page
});

// Route to serve musicians page
router.get('/musicians', authMiddleware.requireAuth, (req, res) => {
  res.sendFile(__dirname + '/../public/musicians.html'); // Serve musicians page
});

module.exports = router;