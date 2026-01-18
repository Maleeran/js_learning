'use strict';

/*
const Person = function (firstName, age) {
  console.log(this);
  this.firstName = firstName;
  this.age = age;
};

const jon = new Person('Jon', 20);

console.log(jon);
// 1. New {} is created
// 2. function is called with arguments and 'this' points to {}
// 3. {} is linked to prototype
// 4. function automatically returns {}

const jack = new Person('Jack', 25);
const matilda = new Person('Matilda', 18);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(`${this.firstName} is ${2021 - this.age} years old.`);
};

jack.calcAge();
matilda.calcAge();

console.log(jon.__proto__ === Person.prototype);
console.log(Person.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.isPrototypeOf(Person));

console.log(Object.getPrototypeOf(jon));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jon.species, matilda.species);
console.log(jon.hasOwnProperty('firstName'));
console.log(jon.hasOwnProperty('species')); // false. species is not inside of the jon instance , but a property of Person.prototype. it is inherited from Person.prototype.

console.log(jon.__proto__ === Person.prototype);
console.log(jon.__proto__.__proto__);
console.log(jon.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [2, 3, 4, 5, 3, 3, 5, 4];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // arr can get the unique method from Array.prototype.

console.log(document.querySelector('h1').__proto__);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  this.accelerate = function () {
    // console.log(this);
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  this.brake = function () {
    // console.log(this);
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();


///////////////////////////////////////
// ES6 Classes

// class expression
// const Student = class {...}

// class declaration
class Student {
  constructor(fullName, age, id) {
    this.fullName = fullName;
    this.age = age;
    this.id = id;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const student1 = new Student('John Smith', 23, 1);
const student2 = new Student('Jane Doe', 24, 2);
console.log(student1.fullName, student2.fullName);
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

///////////////////////////////////////
// Setters and Getters

const account = {
  owner: 'john',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],

  get lastMovement() {
    return this.movements.slice(-1).pop();
  },
  set lastMovement(mov) {
    this.movements.push(mov);
  },
};

console.log(account.lastMovement);

account.lastMovement = 5000;

console.log(account.lastMovement);
console.log(account.movements);

///////////////////////////////////////
// Static Methods
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static publisher = 'Maleeran';

  static createTodays() {
    // remember, this = Article
    return new this("Today's digest", new Date());
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// usage
let articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1)),
];

articles.sort(Article.compare);

console.log(articles[0].title); // CSS
console.log(Article.createTodays().title); // Today's digest
console.log(Article.publisher);

///////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.init('Steven', 2002);
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
 */

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return +(this.speed / 1.6).toFixed(2);
  }

  set speedUS(speed) {
    this.speed = +(speed * 1.6).toFixed(2);
  }
}

const ford = new Car('Ford', 120);
console.log(`${ford.speedUS} mi/h`);
ford.accelerate();
ford.accelerate();

ford.speedUS = 200;
console.log(`${ford.speedUS} mi/h`);
ford.brake();
console.log(ford.speedUS);


///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // call the parent constructor
  this.course = course;
};

// Linking prototypes

console.log(Student.prototype);
// Student.prototype = Object.create(Person.prototype);

console.log(Student.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2002, 'Computer Science');
mike.introduce();
// mike.calcAge();

console.log(mike.__proto__ === Student.prototype); // true
console.log(mike.__proto__.__proto__ === Person.prototype); // true
console.log(mike.__proto__.__proto__.__proto__ === Object.prototype);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

console.dir(Student.prototype.constructor);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`,
  );
};

EV.prototype.constructor = EV;

const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(100);
tesla.accelerate();
tesla.brake();
tesla.accelerate();
*/
/*
///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal = new Animal('My animal');

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

let wr = new Rabbit('White Rabbit');

// overriding method
class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
  stop() {
    super.stop(); // call parent method: stop()
    setTimeout(() => this.bark(), 3000); // and then bark
  }
}

let husky = new Dog('Husky');
husky.run(10);
// husky.stop();

// overriding constructor
class Cat extends Animal {
  constructor(name, ...args) {
    super(name); // call parent constructor
    this.color = args[0];
    this.hairLength = args[1];
  }
}

let kitty = new Cat('Siamese', 'black', 'short');

console.log(kitty.name); // Siamese
console.log(kitty.color);
console.log(kitty.hairLength);


// Overriding class fields
class Animal {
  name = 'animal';

  constructor() {
    console.log(this.name); // (*)
  }
}

class Rabbit extends Animal {
  name = 'rabbit'; 
  
  /* 
  Rabbit has no own constructor,so the constructor of Animal is called. 
  like :
  constructor(...args) {
    super(...args); // (*) parent class fields are initialized in the derived class
  }
}

new Animal(); // animal
new Rabbit(); // animal

///////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();


///////////////////////////////////////
// Another Class Example
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
  }

  deposit(mov) {
    this.movements.push(mov);
  }
  withdraw(mov) {
    this.deposit(-mov);
  }

  requestLoan(amount) {
    if (this.movements.some(mov => mov > amount * 0.1)) {
      this.deposit(amount);
      console.log('Loan Approved');
    } else {
      console.log('Loan Denied');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
const acc2 = new Account('Jay', 'USD', 2222);
const acc3 = new Account('Gao', 'RMB', 9999);

acc1.deposit(250);
acc1.withdraw(140);
acc2.deposit(300);
acc2.withdraw(100);
acc3.deposit(50000);
acc3.withdraw(1000);

console.log(acc1.movements, acc2.movements, acc3.movements);

console.log(acc1.pin);
acc1.requestLoan(2300);
console.log(acc1.movements);

///////////////////////////////////////
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

// Protecting “waterAmount”
class CoffeeMachine {
  _waterAmount = 0; // the amount of water inside

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this.power = power;
    console.log(`Created a coffee-machine, power: ${power}`);
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = -100;
console.log(coffeeMachine.waterAmount);


// Read-only “power” (only getter without setter)
class CoffeeMachine {
  _waterAmount = 0; // the amount of water inside

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
    this.isAddedMilk = false;
  }

  get power() {
    return this._power;
  }

  addWater(amount) {
    this.waterAmount += amount;
    return this;
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.addWater(50).addMilk().makeCoffee();
coffeeMachine.power = 25; // Error (no setter)
*/

class CoffeeMachine {
  _waterAmount = 0; // the amount of water inside

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
    this.isAddedMilk = false;
  }

  get power() {
    return this._power;
  }

  addWater(amount) {
    this.waterAmount += amount;
    return this;
  }

  addMilk() {
    this.isAddedMilk = true;
    console.log('Adding milk...');
    return this;
  }

  makeCoffee() {
    if (this.isAddedMilk) {
      console.log('Making Latte...');
    } else console.log('Making Americano...');
  }

  clean() {
    console.log('Cleaning the coffee machine...');
    this.isAddedMilk = false;
    this.waterAmount = 0;
    return this;
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.addWater(50).addMilk().makeCoffee();

coffeeMachine.clean().addWater(100).makeCoffee();
