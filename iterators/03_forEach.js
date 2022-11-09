const numbers = [10, 20, 30, 40, 50];
const names = ['Reed', 'Richard', 'Tony', 'Stark'];

numbers.forEach((value, index) => {
  console.log(value);
  console.log(index);

  // if (value <= 30) break; Cannot use a condition
});

// One line of code
names.forEach((value) => console.log(value));
