const requireAuth = (req, res, next) => {
    // Check if the user is logged in by looking for a session or other authentication token
    if (req.session && req.session.user) {
      next(); // User is authenticated, proceed to the requested route
    } else {
      res.redirect('/auth/login'); // User is not authenticated, redirect to the login page
    }
  };
  
  module.exports = {
    requireAuth, // Exporting middleware to be used in route handlers
  };