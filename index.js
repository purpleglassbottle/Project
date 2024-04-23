const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const authMiddleware = require('./middleware/auth');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize session management
app.use(session({
  secret: 'your_secret_key', // Secure key for session management
  resave: false,
  saveUninitialized: false,
}));

// Apply routes
app.use('/auth', authRoutes); // Routes related to authentication
app.use('/protected', protectedRoutes); // Routes that require authentication

// Catch-all route for handling 404 errors or unauthorized access
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});