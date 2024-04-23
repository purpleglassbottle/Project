exports.requireAuth = (req, res, next) => {
    if (req.session.user) {
      next(); // User is authenticated, allow access
    } else {
      res.redirect('/auth/login'); // Redirect to login if not authenticated
    }
  };