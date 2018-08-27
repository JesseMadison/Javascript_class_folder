function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;

     var data = xhttp.responseText;
     console.log(xhttp.responseText);
    }
  };
  xhttp.open("GET", "test/page", true);
  xhttp.send();
}
