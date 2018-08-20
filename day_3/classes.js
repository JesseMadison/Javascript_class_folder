function Dog(name, location, steps){
  console.log(this);
  this.name = name;
  this.location = location;
  this.steps = steps;
  console.log(this);
}

// dog(); function invotcation
// instance method:
dog1 = new Dog("Twiggy","Sydney", "100 steps");
dog2 = new Dog("Tommy", "Melbourne", "100 steps");
// console.log(dog1.name)
// console.log(dog2.name)

// prototype allows you to add method to the function
Dog.prototype.speak = function(){
  console.log(`whoof my name is ${this.name} and i am from ${this.location} i did this many steps ${this.steps}`)
}
Dog.prototype.setlocation = function(newLocation) {
  this.location = newLocation;
}
Dog.prototype.setsteps = function(newsteps) {
  this.steps = newsteps;
}


// Dog.speak() doesnt work
dog1.speak();
dog2.speak();

dog1.setlocation("Adelaide");
dog2.setlocation("Brisbane");
dog1.speak();
