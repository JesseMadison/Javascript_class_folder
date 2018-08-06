// Object declaration
// Literal syntax, recommended
var obj = {}

// Constuctor syntax, not recommended
var objContructor = new Object()

objLiteral = {
  name: "alex", //string
  age: 10, //interger
  loveGaming: true //boolean
  languages: ["english","spanish"], //array
  log: function() {
     console.log("hello");  //also a fuction
  }
  anotherObject: {
    name: "long"
    age: "15"

  }
}

// access object values
console.log(objLiteral.name);
console.log(objLiteral["name"]);
objLiteral.bio = "coding";
console.log(objLiteral)

// <<<< Use delete to delete a property from an object >>>>
delete objLiteral.bio;
console.log(objLiteral)
