// Using for-of or for-in reduce the amount of mistake you may have
const numbers = [10, 20, 30, 40, 50];

// Use in to get the index
for (const index in numbers) {
  console.log(index);
}

// Use for to get the value
for (let value of numbers) {
  console.log(value);

  value += 100;
  console.log(value);

  if (value > 130) break; // Can use a condition
  console.log(value);
}
