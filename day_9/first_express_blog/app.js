// require express package
const express = require('express');
const app = express();
// handlebar package to render views
const exphbs = require('express-handlebars');
// mongoose
const mongoose = require('mongoose');
// require bosy parser to parse through the form content
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const db =  require('./config/database')

// if on production use production port else use 3000
const port = process.env.PORT || 3000;

// load routes
const users = require('./routes/users');
// load passport config
require('./config/passport')(passport);

// connect to the mongo db
mongoose.connect( db.monogoURI, { useNewUrlParser: true })
.then(() => console.log("connected to db"))
.catch((err) => console.log(err));


// require the blog model
require('./models/Blog')
// create a Blog model
const Blog = mongoose.model('blogs');
// All middlewares starts here

// bring in the helper to ensure authenticated function
const {ensureAuthenticated} = require('./helper/auth');

// middleware for static css files
app.use(express.static('public'));
//middleware for body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// middleware for express handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// middleware for express session, note passport middleware must be placed after express session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'secure',
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());
// middleware codes
// app.use((req, res, next) =>{
//   console.log('middleware running');
//   // modify the req object
//   req.name = "NANDS"
//   next()
// });
// home route

app.use((req, res, next) => {
  // declare a global varible user to
  res.locals.user = req.user;
  next();
})
// All middlewares end here
app.get('/', (req, res) => {
  // render the home page
  let title = "hello";
  res.render('home',{
    elephant: title
  });
});

//About page
app.get('/about', (req, res) => {
  res.render('about');
});

// add form
app.get('/blogs/new', ensureAuthenticated, (req, res) => {
   res.render('blogs/new');
});

// post route to save to the db
app.post('/blogs',(req, res) => {
  console.log(req.body);
  // res.send('ok');
  let errors = [];
  if (!req.body.title) {
    errors.push({text: "Title must be present"});
  }
  if (!req.body.description) {
    errors.push({text: "Description must be present"});
  }
  if (errors.length > 0) {
    res.render('blogs/new', {
      title: req.body.title,
      description: req.body.description,
      errors: errors,
    });

  } else {
    // save to db
    // res.send('passed');
    let newBlog = {
      title: req.body.title,
      description: req.body.description,
      // update user id to the blogs
      user: req.user.id
    }
    new Blog(newBlog)
    .save()
    .then(blogs => {
      console.log(blogs)
      res.redirect('/blogs');
    })
    .catch(err => console.log(err));
  }
});
// show all blogs from  database
app.get('/blogs', ensureAuthenticated, (req, res) =>{
  Blog.find()
  .then(blogs => {
    console.log(blogs);
    res.render('blogs/index', {
      blogs: blogs
    });
  })
  .catch(err => console.log(err));
});

// edit a blog

app.get('/blogs/:id/edit', ensureAuthenticated, (req, res) => {
  Blog.findById({
    _id: req.params.id
  })
  .then(blog => {
    // if the blog does not belong to logged in user
    if(blog.user != req.user.id) {
      // redirect back to home page
      res.redirect('/');
    } else {
      console.log(blog)
      res.render('blogs/edit', {
         blog: blog
      });
    }
  })
});
// update the database
app.put('/blogs/:id', (req, res) => {
  // find the blog
  Blog.findById({
    _id: req.params.id
  })
  .then(blog => {
    // update the blog with new valus from the form
    blog.title = req.body.title,
    blog.description = req.body.description
    // save the update blog
    blog.save()
      .then(() => res.redirect('/blogs'))
  })
  .catch((err) => console.log(err));
});

// delete the blog
app.delete('/blogs/:id', ensureAuthenticated, (req, res) => {
  Blog.remove({
    _id: req.params.id
  })
  .then(() => res.redirect('/blogs'))
  .catch( err => console.log(err));
});
app.use('/users', users);
// start a server
app.listen(port, () => console.log(`sever started on port ${port}`));
