// CHALLENGE 3 HINT:
const http = require('http');

var testURL = new URL("http://www.ip-api.com/csv");
let data = "string stuff";

http.get(testURL, (resp) => {
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        //console.log(data);
        processGeoData();
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
}); 
