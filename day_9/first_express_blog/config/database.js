// if production else us local db
if (process.env,NODE_ENV ==="production"){
  module.exports = {monogoURI:
    'mongodb://jesse:a12345@ds151402.mlab.com:51402/express-blog-production'
  } else {
    module.export = {monogoURI:
      'mongodb://localhost/blog-dev'
  }
}
