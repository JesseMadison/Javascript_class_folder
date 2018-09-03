// const fetch = require('@brillout/fetch'); // npm install @brillout/fetch
const fetch = require('node-fetch');

fetch("GET https://api.gfycat.com/v1/gfycats/{gfyid}", {
  headers: {
    Authorization: " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzU0MzU2OTUsImlzcyI6IjJfVl8yTWZxIiwicm9sZXMiOlsiQ29udGVudF9SZWFkZXIiXX0.4vlYLWqsQKDpHntx6_CWLtCK0b8zbt_AzjDPyuSFlRo"
  }
})
.then(response => console.log(response.json()))
.then(characters => console.log(characters))
