///////////////////////////////////////
// Exporting and Importing in ES6 Modules

// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// import * as ShoppingCart from './shoppingCart.js';

console.log('Importing module');

// ShoppingCart.addToCart('apples', 5);
// console.log(ShoppingCart.totalPrice);
// console.log(tq, price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

/*
///////////////////////////////////////
// Top-Level Await (ES2022)

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);


const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`,
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier.`);
  };

  return { addToCart, cart, totalPrice, totalQuantity };
})();

shoppingCart2.addToCart('apple', 4);

console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);



/////////////////////////////////////
// CommonJS Modules
// Export

export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
};

// Import
const{addToCart} = require('./shoppingCart.js');
*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
