const numbers = [1, 2, 3, 4, 5];

let arr = [];
for (const number of numbers) {
  arr = [...arr, number];
}

arr; // [1, 2, 3, 4, 5]

// using .reduce()
const useReduce = numbers.reduce((arr, number) => [...arr, number], []);
useReduce; // [1, 2, 3, 4, 5]

const reduceRight = numbers.reduceRight((arr, number) => [...arr, number], []);
reduceRight; // [5, 4, 3, 2, 1]

const groups = [
  [3, 4], // 4, 4, 4
  [3, 10], // 10, 10, 10
  [3, 15], // 15, 15, 15
];

const countValue = groups.reduce(
  (arr, [count, value]) => [...arr, ...Array(count).fill(value)],
  []
);

countValue;
