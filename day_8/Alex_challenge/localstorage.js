// This whole function is made for saving the localstorage data the user enters
function savelocalStorage() {
  localStorage._user = document.getElementById("user").value;
  localStorage._uage = document.getElementById("age").value;
}

function loadlocalStorage() {
  document.getElementById("user").value = localStorage._user;
  document.getElementById("age").value = localStorage._uage;
}

// Refreshes the input field after the user submits the fields
document.getElementById("refresh").addEventListener("click", function reloadInputField() {
document.getElementById("user").value = "";
document.getElementById("age").value = "";
});
