'use strict';
const budget = Object.freeze([
    {
        value: 250,
        description: "Sold old TV \uD83D\uDCFA",
        user: 'jonas'
    },
    {
        value: -45,
        description: "Groceries \uD83E\uDD51",
        user: 'jonas'
    },
    {
        value: 3500,
        description: "Monthly salary \uD83D\uDC69\u200D\uD83D\uDCBB",
        user: 'jonas'
    },
    {
        value: 300,
        description: "Freelancing \uD83D\uDC69\u200D\uD83D\uDCBB",
        user: 'jonas'
    },
    {
        value: -1100,
        description: "New iPhone \uD83D\uDCF1",
        user: 'jonas'
    },
    {
        value: -20,
        description: "Candy \uD83C\uDF6D",
        user: 'matilda'
    },
    {
        value: -125,
        description: "Toys \uD83D\uDE82",
        user: 'matilda'
    },
    {
        value: -1800,
        description: "New Laptop \uD83D\uDCBB",
        user: 'jonas'
    }
]);
// Object.freeze(): you will not be able to change the values inside the object and also add new properties
const spendLimits = Object.freeze({
    jonas: 1500,
    matilda: 100
});
// spendLimits.jay = 200; // Uncaught TypeError: Cannot add property jay, object is not extensible at clean.js:19:17
const getLimit = (user)=>spendLimits?.[user] ?? 0;
const addExpense = function(state, limits, value, description, user = 'jonas') {
    const cleanUser = user.toLowerCase();
    // const limit = spendLimits[user] ? spendLimits[user] : 0;
    return value <= getLimit(cleanUser) ? [
        ...state,
        {
            value: -value,
            description,
            user: cleanUser
        }
    ] : state;
};
const newBudget1 = addExpense(budget, spendLimits, 10, "Pizza \uD83C\uDF55");
const newBudget2 = addExpense(newBudget1, spendLimits, 100, "Going to movies \uD83C\uDF7F", 'Matilda');
const newBudget3 = addExpense(newBudget2, spendLimits, 200, 'Stuff', 'Jay');
console.log(newBudget1);
console.log(newBudget2);
addExpense(budget, spendLimits, 10, "Pizza \uD83C\uDF55");
addExpense(budget, spendLimits, 100, "Going to movies \uD83C\uDF7F", 'Matilda');
addExpense(budget, spendLimits, 200, 'Stuff', 'Jay');
const checkExpense = function() {
    for (const entry of budget)// let lim;
    // if (spendLimits[el.user]) {
    //   lim = spendLimits[el.user];
    // } else {
    //   lim = 0;
    // }
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpense();
const checkExpenses = (state, limits)=>state.map((entry)=>entry.value < -getLimit(entry.user) ? {
            ...entry,
            flag: 'limit'
        } : entry);
const finalBudget = checkExpenses(newBudget3, spendLimits);
console.log(finalBudget);
const logBigExpenses = function(bigLimit) {
    let output = '';
    for (let el of budget)output += el.value <= -bigLimit ? `${el.description.slice(-2)} / ` : '';
    console.log(output);
};
const newLogBigExpenses = (state, bigLimit)=>state.filter((entry)=>entry.value <= -bigLimit).map((entry)=>entry.description.slice(-2)).join(' / ');
console.log(newLogBigExpenses(finalBudget, 500));

//# sourceMappingURL=final.3ec6c1be.js.map
