// ...  allows you to access and change the argment in the functions as if they were an array. this was only introduced in ES6.

// With the example below itll only show the numbers(each number is an argument) that is greater than 18

const checkAdult = (...args) => {
  return args.filter(el => el > 18);
}

console.log(checkAdult(10, 5, 20));


// before in ES5  you would have had to assign each number to an argument

function checkAdult(num1, num2, num3) {
  var args = [num1, num2, num3]
  var result = args.filter(checkValue);
  return result
}

function checkValue(el){
  return el > 18
}

console.log(checkAdult(10, 5, 20));
