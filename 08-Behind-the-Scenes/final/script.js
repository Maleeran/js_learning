'use strict';

function calcAge(birthYear) {
  const age = 2026 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Maleeran';
calcAge(2001);

// This keyword
const Tom = {
  name: 'Tom',
  year: 2001,
  calcAge: function () {
    // console.log(this);
    console.log(2026 - this.year);
  },
};

Tom.calcAge();

const John = {
  name: 'John',
  year: 2000,
};

John.calcAge = Tom.calcAge;
John.calcAge();

/*
const f = Tom.calcAge; // this will not work.
f(); // when we call a function like this, this keyword is undefined.
*/

/*
// correct
const f = () => {
  Tom.calcAge();
};
f(); // this will work. because arrow functions do not have their own this keyword.
*/

// Arrow functions

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    /* this will be undefined  
    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    */

    /*solution 1: use 'self '*/
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    /* solution 2: use bind */
    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // }.bind(this);

    /* solution 3: arrow function */
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  // greet: () => console.log(`Hey ${this.firstName}`), // will be 'Hey undefined'
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet(); // always use normal function when creating an object.
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8); // arguments is not available in arrow function.
