const coord = [-20, 10, 100, -100, -150, 50];

// Check if a number are in the coord array
const is20InTheArray = coord.includes(20);
console.log(is20InTheArray); // false

const isMinus100InTheArray = coord.includes(-100);
console.log(isMinus100InTheArray); // true

// Check if some numbers are positive?
const isPositive = coord.some((num) => num > 0);
console.log(isPositive); // true

// Check if every numbers are positive?
const isEvery = coord.every((num) => num > 0);
console.log(isEvery); // false
