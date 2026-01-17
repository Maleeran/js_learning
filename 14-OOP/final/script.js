'use strict';

// class Student {
//   constructor(name, age, id) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
//   }
//   getName() {
//     return this.name;
//   }

//   getAge() {
//     return this.age;
//   }

//   getId() {
//     return this.id;
//   }
// }

// const student1 = new Student();
// console.log(student1.getName());

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
