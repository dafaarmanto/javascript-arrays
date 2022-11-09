const numbers = [10, 20, 30, 40, 50];

const times10 = numbers.map((v) => v * 10);
console.log(times10); // [100, 200, 300, 400, 500]

// Array to object
const times10Obj = numbers.map((v) => ({ value: v * 10 }));
console.log(times10Obj); // [{ value: 100 }, { value: 200 }, ..., { value: 500 }]

// .filter() + .map()
const numbersWithNegative = [-30, -20, -10, 10, 20, 30];

const positiveNumberTimes10 = numbersWithNegative
  .filter((v) => v > 0)
  .map((v) => v * 10);
console.log(positiveNumberTimes10); // [100, 200, 300]

// Map an object
const people = [
  {
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    nationality: 'Portugal',
  },
  {
    firstName: 'Lionel',
    lastName: 'Messi',
    nationality: 'Argentina',
  },
];

const fullName = people.map((p) => ({
  ...p,
  fullName: `${p.firstName} ${p.lastName}`,
}));
console.log(fullName);
