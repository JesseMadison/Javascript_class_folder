var name = "tom";
console.log("What is your name?");
process.stdin.on("readable", function() {
  name = process.stdin.read();
  if (name == "tom" ) {
    console.log("Hello " + name);
  }
  else{
   console.log("hello world")
  }

});

var age = 18

var age = prompt("what is your age?");
if (age < 18 )
  console.log("Welcome to the casino")
else 
  console.log("You're are under age ")
