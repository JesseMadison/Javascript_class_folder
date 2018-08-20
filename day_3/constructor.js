// dog1 = new Dog("twiggy", "sydney"); class is not hoisted
var dogCount = 0
class Dog {
  // acts like initialize in ruby
  constructor(name, location) {
      console.log(this);
      this.name = name;
      this.location = location;
      dogCount ++; //increment the counter
  }
  static dogCount () {
    console.log(`total number of dogs: ${dogCount}`)
  }
}
Dog.prototype.speak = function() {
  console.log(`whoof my name is ${this.name} and I am from ${this.location} `)
}
Dog.prototype.setLocation = function(newLocation) {
    this.location = newLocation;
}
Dog.prototype.showDistance = function(steps) {
    console.log(`${this.name}, walked ${steps} today`);
}

dog1 = new Dog("twiggy", "sydney");
console.log(dog1.name);

dog2 = new Dog("Tommy", "melbourne");
dog3 = new Dog("blah", "melbourne");

Dog.dogCount();
