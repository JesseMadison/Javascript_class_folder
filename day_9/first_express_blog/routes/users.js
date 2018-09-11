const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport')

// require model
require('../models/User')
// create user model
const User = mongoose.model('users');


// registration route
router.get('/register', (req, res) => {
  res.render('users/register');
});
// post route to capture data from the form and save to db
router.post('/register', (req, res) => {
  // res.send('In the post route');
  console.log(req.body);

  // let errors =[];
  // if(req.body.password.length <5) {
  //   error.push({text: "Password must be atleast 5 characters long"})
  // }

  let errors = [];
  // check if the email has been signed up before
  if (req.body.password != req.body.password2) {
    errors.push({text: "Password must match"});
  }

  // if there was any errors, re render the signup page and pass the filled in params
  if(errors.length > 0) {
    res.render('users/register' , {
      name:req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2
    })
  }
  else {
    let newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    // encrypt the password
    bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
        // Store hash in your password DB.
        if(err => console.log(err))
        // set the encrypted password as the new passwrod in the //
        newUser.password = hash;
        // create User model and insert data to //
        new User(newUser).save()
        .then(user => {
          // redirect to the home package
          res.redirect('/');
        })
        .catch(err => console.log(err))

    });
});
  }
})


// Login route
router.get('/login', (req, res) => {
  res.render('users/login');
});
// post route for login
router.post('/login', (req,res,next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  })(req, res, next);
})

// logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/users/login')
})

module.exports = router;
