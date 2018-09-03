
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=bIvahmQ4pZO0pNUADTHJLC16TmE8Q0ei&limit=30");
xhr.done(function(response) {
  console.log(response.data[0].url);
  $('.container').append(`<iframe src=${response.data[0].embed_url}></iframe>`);
});

// var result = JSON.parse(xhr);
console.log(xhr);
