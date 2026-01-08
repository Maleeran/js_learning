'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
///////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas')); // ['J', 'o', 'n', 'a', 's']
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread'); // add a new element
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto'); // delete an element

console.log(ordersSet); //{'Pasta', 'Pizza', 'Garlic Bread'}

for (const order of ordersSet) console.log(order); // Set is iterable

// Example : deleting duplicate elements
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);

console.log(new Set('jonasschmedtmann').size);
console.log(...new Set('Jonas'));

///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
}

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
for (const [num, player] of game.scored.entries()) {
  console.log(`Goal ${num + 1}: ${player}`);
}
// 2.
const odds = Object.values(game.odds);
let sum = 0;
for (const odd of odds) {
  sum += odd;
}
console.log((sum / odds.length).toFixed(2));

// 3.
console.log(odds);
for (const [team, oddNum] of Object.entries(game.odds)) {
  game[team]
    ? console.log(`Odd of victory ${game[team]}: ${oddNum}`)
    : console.log(`Odd of draw: ${oddNum}`);
}

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  console.log(scorers);
}
console.log(scorers); 
*/

/*
///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours); /// Object.keys: returns an array of an object's own enumerable property names (keys)
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
/* Object: { key1: value1, key2: value2, ... } 
  Object.keys() => get key1, key2 ...
  Object.values() => get value1, value2 ...
  Object.entries() => get [key1, value1], [key2, value2] ...
*/
/*
// Property VALUES
console.log(Object.values(openingHours)); // Object.values: returns an array of an object's own enumerable property values

// Entire object
const entries = Object.entries(openingHours); // Object.entries: returns an array of an object's own enumerable property [key, value] pairs
console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}

/*
///////////////////////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
const usersEmpty = [];
console.log(users[0]?.name ?? 'User array empty');
console.log(usersEmpty[0]?.name ?? 'User array empty');

if (usersEmpty.length > 0) console.log(usersEmpty[0].name);
else console.log('User array empty');

/*
///////////////////////////////////////
// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const element of menu) {
  console.log(element);
}
//.entries() 是一个用于将可迭代对象（如数组、Map、Set 等）。它返回一个迭代器（Iterator），每次调用 next() 会返回一个 [key, value] 形式的数组。
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);

///////////////////////////////////////
// Coding Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//  1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log({ team1, draw, team2 });

// 6.
const printGoals = function (...playerNames) {
  console.log(...playerNames);
  console.log(playerNames.length);
  console.log(`${playerNames.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7.
// let a = team2 > team1;
// let b = team1 > team2;
// a &&= 'Team 1 is more likely to win';
// b &&= 'Team 2 is more likely to win';
// console.log(a || b);
team2 > team1 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

/*
///////////////////////////////////////
// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1);
// console.log(rest2);
// '||=': if the value is falsy, then set it to 10.
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1);
// console.log(rest2);
// '??=': if the value is null or undefined, then set it to 10.
// rest2.numGuests ||= 10;
// console.log(rest2);
// '&&=':if the value is truthy, then set it to 10.
rest1.numGuests &&= 10;
rest2.numGuests &&= 10;
console.log(rest1);


///////////////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish operator just for null and undefined , it won't work for falsy(like 0, false, '').
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);


///////////////////////////////////////
// Short Circuiting (&& and ||)
console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // 'Jonas'
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0; // 0 => false
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10

console.log('---- AND ----');
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // 'Jonas'

console.log('Hello' && 23 && null && 'jonas'); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// console.log(restaurant.orderPizza);
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // mushrooms , ['spinach']

///////////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]]; // [1, 2, 3, 4]

// REST, because on LEFT side of =
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, ...rest);
console.log(rest);

// Objects
const { sat, ...restdays } = restaurant.openingHours;
console.log(restdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}; // we can add arbitrary number of arguments by using rest operator(...)

add(1, 2, 3);
add(1, 2, 3, 4, 5);

const x = [1, 3, 5, 7];
add(...x); // we can unpack array elements into function arguments by using spread operator(...)

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

///////////////////////////////////////
// Spread Operator (...)
const arr = [7, 8, 9];
console.log(...arr);
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
const goodNewArr = [1, 2, ...arr];
console.log(badNewArr);
console.log(goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const newMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Maleeran';
const letters = [...str.toLowerCase(), ' ', ...str.toUpperCase()]; //
console.log(...letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
// Objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Guiseppe',
};
console.log(newRestaurant);

const restaurantCopy = { ...newRestaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);/*
///////////////////////
// Destructuring  Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// Destructure without renaming
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Destructure with renaming for better variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects
const { fri } = openingHours;
console.log(fri); // { open: 11, close: 23 }
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11, 23
const {
  fri: { open: o, close: c },
} = openingHours; // nested destructuring with renaming
console.log(o, c); // 11, 23

/////////////////////////////////////////* arrays 
// Nested destructuring
const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);  2, [5, 6]
// console.log(...nested);  // 2, 4, 5, 6

const [i, , [j, k]] = nested;
console.log(i, j, k); // 2, 5, 6

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8, 9, 1
*/
