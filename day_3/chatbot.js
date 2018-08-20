// declare an array to hold questions
var questions = ["what is your name?", "how old are you?", "what is you favourite color?"];

// index varible to point to different questions
var questionIndex = 0;

var question = document.getElementById("question");
question.innerHTML = questions[questionIndex];

function inputEvents() {
  answer();
}

// This function resets the input field
function reloadInputField() {

  document.getElementById("input-field").value = "";
}


// chan


// everytime the submit buttton is clicked the following action should take place
// -fetch the value provide by the user
// -draft a correesponding response based user input
// -disply it in the h1 tag
// -show the next question

function answer() {
  // Fetch the user and disply the answer in the h1 tag
  var response =
    document.getElementById("input-field").value;
  if (response === "") {
    alert("Please input something");
  } else {
    if (questionIndex == 0) {
      question.innerHTML = `hello ${response}`;
      reloadInputField();

    } else if (questionIndex == 1) {
      // I use this validation to check if what was inserted into the field was an interger
      if (!isNaN(parseInt(response))) {

      } else {
        alert("Please insert a number");
        return false;
      }

      let currentYear = new Date().getUTCFullYear();
      question.innerHTML = `You must be born in ${currentYear - response}`;
      reloadInputField();

    } else if (questionIndex == 2) {
      question.innerHTML = `WOW ${response} is my favourite color too`;
      reloadInputField();
      document.body.style.backgroundColor = `${response}`;

    } else if (questionIndex == 3) {
      question.innerHTML = "you must program me further";
      reloadInputField();
    }
    // increment questionIndex to point to the next question
    questionIndex++;
    // wait for 2 seconds before showing the next question
    setTimeout(nextQuestion, 2000);
    // disply next question
    function nextQuestion() {
      question.innerHTML = questions[questionIndex];

    }
  }
}
