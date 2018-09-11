const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

// load user model
const User = mongoose.model('users')

// export the passport authentication function implemented with local strategy

module.exports = (passport) => {
  passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
    console.log(email);
    User.findOne({
      email: email
    })
    .then( user => {
      // console.log(user);
      // if the user doesnt exist in the db, throw a message indicating user not found
      if(!user){
        return done(null, false, {message: "User not found"});
      }
      // match password: decrtp and compare
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if(err => console.log(err));
        if(isMatch) {
          return done(null, user);
          }
          else {
            return done(null,false, {message:"incorrect password"})
          }
      })
    })
  }));
}

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
