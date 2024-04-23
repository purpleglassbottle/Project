const express = require('express');
const session = require('express-session');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize session management
app.use(session({
  secret: 'your_secret_key', // Use a strong secret key
  resave: false,
  saveUninitialized: false,
}));

// Import routes and middleware
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const authMiddleware = require('./middleware/auth');

// Mount routes
app.use('/auth', authRoutes);
app.use('/protected', authMiddleware.requireAuth, protectedRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});