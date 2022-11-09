const matrix = [
  [10, 20, 30],
  [30, 20, 40],
  [50, 20, 40],
];

const complexMatrix = [
  [
    [10, 20, 30],
    [20, 20, 10],
    [100, 20, 90],
  ],
  [
    [30, 20, 40],
    [55, 20, 11],
    [56, 99, 103],
  ],
  [
    [50, 20, 40],
    [44, 23, 33],
    [66, 77, 32],
  ],
];

// Turn matrix into one single array
console.log(matrix.flat()); // [10, 20, 30, 30, 20, 40, 50, 20, 40]

// Infinity makes complex matrix into one single array
console.log(complexMatrix.flat(Infinity));

// .flatMap() - Make the value a single array
const numbers = [10, 20, 30];

const valIndex = numbers.map((value, index) => [value * 100, index]);
console.log(valIndex); // [[1000, 0], [2000, 1], [3000, 2]]

// With .flatMap()
const flatmap = numbers.flatMap((value, index) => [value * 100, index]);
console.log(flatmap); // [1000, 0, 2000, 1, 3000, 2]
