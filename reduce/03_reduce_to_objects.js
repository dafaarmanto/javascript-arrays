const numbers = [12, 15, 12, 2, 2, 4, 4, 10, 10, 25];

const lookup = {};
for (const number of numbers) {
  lookup[number] = (lookup[number] ?? 0) + 1;
}

lookup; // {2: 2, 4: 2, 10: 2, 12: 2, 15: 1, 25: 1}

// Using .reduce()
const useReduce = numbers.reduce(
  (lookup, value) => ({
    ...lookup,
    [value]: (lookup[value] ?? 0) + 1,
  }),
  {}
);

useReduce; // {2: 2, 4: 2, 10: 2, 12: 2, 15: 1, 25: 1}

// min max
const minMax = numbers.reduce(
  ({ min, max }, value) => ({
    min: Math.min(min, value),
    max: Math.max(max, value),
  }),
  {
    min: Infinity,
    max: -Infinity,
  }
);

minMax; // { min: 2, max: 25 }

// sum
const customers = {
  Harry: 12,
  Lydia: 14,
  Terry: 20,
};

const sum = (objOrArray) => {
  return Object.values(objOrArray).reduce((sum, val) => sum + val, 0);
};

console.log(sum(customers)); // 46
