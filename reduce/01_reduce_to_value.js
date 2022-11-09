const numbers = [10, 20, 30, 40, 50];

// Using for-of loop
let sum = 0;
for (const values of numbers) {
  sum += values;
}

console.log(sum); // 150

// Using .reduce()
const useReduce = numbers.reduce((sum, value) => {
  sum += value;

  return sum;
}, 0);

console.log(useReduce); // 150

numbers.reduce((sum, value) => (sum += value), 0); // 150

const average = numbers.reduce(
  (avg, value, _, arr) => avg + value / arr.length,
  0
);
console.log(average); //30

const names = ['John', 'Liam', 'Harry', 'Chris'];

const joinName = names.reduce(
  (str, name, index) => str + (index > 0 ? ', ' : '') + name,
  ''
);
console.log(joinName); // John, Liam, Harry, Chris
