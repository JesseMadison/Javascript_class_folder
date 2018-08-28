// This whole function is made for saving the cookie data the user enters
function saveCookies(){
  let myCookies = {};
  // These two field captures the data from the input fields from the browser
  myCookies["_user"] = document.getElementById("user").value;
  myCookies["_age"] = document.getElementById("age").value;
  // This establishes and emtpy cookie
  document.cookie = "";
  // This sets the cookie expiry time (60*1000 is just setting it to 1 minute)
  var expiresAttr = new Date(Date.now()+60*1000).toString();
  var cookieString = "";
  for (var key in myCookies) {
    // key is the var in this example _user and _age
    cookieString = key+"="+myCookies[key]+";"+expiresAttr+";"
    document.cookie = cookieString;

  }
  // Allows the user to see that the cookie has been saved
  document.getElementById("out").innerHTML = document.cookie;
  reloadInputField
}
// This function will load the cookie data that has been saved
function loadCookies() {
  let myCookies = {};
  // this removes the ";" from the key value pairs saved in the cookie
  var kv = document.cookie.split(";");
  // creates a loop for each key value saved in the cookie
  for (var id in kv) {
    var cookie = kv[id].split("=");
    // Trim removes the white space
    myCookies[cookie[0].trim()] = cookie[1];
  }
  // will disply the saved cookie data in the input fields
  document.getElementById("user").value = myCookies["_user"];
  document.getElementById("age").value = myCookies["_age"];
}

// This function resets the input field
function reloadInputField() {

  document.getElementById("out").value = "";
}
