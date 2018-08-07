console.log(a);
var a = "hello world";
console.log(a);
// JE perform hoisting
// var greet;
var a;
console.log(a);
a = null
a = "hello world"
console.log(a);

console.log(welcome);
function welcome(){
  return "welcome"
}

console.log(greet);
var greet = function() {
  return "hello"
}
console.log(greet);

// <<<< To test this code in terminal type for this example, node hoisting_example.js, otherwise for other files type, node "what the file name is" to run the javascript application >>>> 
