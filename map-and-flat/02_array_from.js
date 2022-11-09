const numbers = [10, 20, 30, 40, 50, 60];

// Make a copy
console.log(Array.from(numbers)); // [10, 20, 30, 40, 50, 60]
console.log(Array.from(numbers, (v) => v * 10)); // [100, 200, 300, 400, 500, 600]
