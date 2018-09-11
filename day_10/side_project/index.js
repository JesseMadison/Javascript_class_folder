// Apps libaraies
const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Connect to mongo // db
mongoose.connect('mongodb://localhost/side-project', {useNewUrlParser: true})
.then(() => console.log('Connected to DB'))
.catch((err) => console.log(err));

// require the blog model
require('./models/User')
// create a Blog model


// middleware for static css, javascript files stored in the public folder
app.use(express.static('public'));

// Routers for Project
// Route for the home page
app.get("/", (req, res) => {
  res.render("home")
})
// Route for the login page
app.get('/users/login', (req, res) => {
    res.render('users/login');
});

app.listen(3000);
