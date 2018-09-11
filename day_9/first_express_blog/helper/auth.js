module.exports = {
  // middleware function to check if the user in logged in or not
  ensureAuthenticated: (req, res, next) => {
    if(req.isAuthenticated()) {
      // excute the next fuction which in most cases it would be a route
      return next();
    }else {
        // redirect to login package
        res.redirect('/user/login')
    }
  }
}
