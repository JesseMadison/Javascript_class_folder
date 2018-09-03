// require express package
const express = require('express'
)
const app = express();
const port = 3000;

// start a server
app.listen(port,() => console.log(`server started on port ${port}`));
