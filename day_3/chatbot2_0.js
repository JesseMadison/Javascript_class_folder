// Empty arrays
var questions = []
var answers = []

// This function calls all the events when the user pushes the submit buttton
function inputEvents() {
  usersQuestions();
  // reloadInputField();
}

// This function resets the input field
function reloadInputField() {
  document.getElementById("input-field").value = "";
}

// This function is used to capture the users questions and push it to the questions array
function usersQuestions() {
  var response =
  document.getElementById("input-field").value;
  if (response === "") {
  alert("Please input something");
  }
  else {
  questions.push(`${response}`)
  console.log(questions)

  jQuery.fn.clickToggle = function(a,b) {
  function cb(){ [b,a][this._tog^=1].call(this); }
  return this.on("click", cb);
};

$('button').clickToggle(function() {
  $("h4").text("B");
}, function() {
  $("h4").text("A");
}); // You can chain here with another jQuery method
}
}
