const firstArray = [10, 20, 30];
const secondArray = [40, 50, 60];

console.log(firstArray.concat(secondArray)); // [10, 20, 30, 40, 50, 60]
console.log(firstArray.concat(secondArray).map((v) => v * 2)); // [20, 40, 60, 80, 100, 120]

// With spread operator
const withSpread = [...firstArray, ...secondArray].map((v) => v * 2);
console.log(withSpread); // [20, 40, 60, 80, 100, 120]
