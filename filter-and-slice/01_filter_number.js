const numbers = [-50, -30, -10, 10, 40, 50];

/*
 * Filter have three arguments
 * v: value, i: index, a: the original array
 */

// Filter positive value
const positive = numbers.filter((v) => v > 0);
console.log(positive); // [10, 40, 50]

// .filter() returns an array, so we can map, filter, or reduce it again
const positiveUnder50 = numbers.filter((v) => v > 0).filter((v) => v < 50);
console.log(positiveUnder50); // [10, 40]

// Add 10 to each positive value under 50
const addTen = positiveUnder50.map((v) => v + 10);
console.log(addTen); // [20, 50]

// Filter negative value
const negative = numbers.filter((v) => v < 0);
console.log(negative); // [-50, -30, -10]

// Change negative to positive
const toPositive = negative.map((v) => ~v + 1);
console.log(toPositive); // [50, 30, 10]

// Filter a number that have the next number + 1
// 9 + 1 = 10 true, 11 + 1 = 12 false (the array doesn't have number 12)
const num = [9, 10, 11, 13, 15, 17, 18];

const hasNext = num.filter((v, _, a) => a.includes(v + 1));
console.log(hasNext); // [9, 10, 17]
