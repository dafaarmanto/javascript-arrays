const numbers = [10, 20, 30, 40, 50];

// Bad use case
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

// Best use case using destructuring
// To print the rest of the array, use spread operators (...restOfTheArray)
const [num1, num2, num3, ...restOfTheArray] = numbers;
num1; // 10
num2; // 20
num3; // 30
restOfTheArray; // [40, 50]

// Spread operators can also be used to copy an array

/* 
  ! NOTE:
  * The place where you put the spread operator is important
  * If you put the spread operator in front of the new value [...oldValue, "new value"],
  * It will copying all the value first and after that adding the new value ["old value", "new value"]
  * If you put the spread operator behind of the new value ["new value", ...oldValue],
  * The new value will be added first and then the rest of the all value ["new value", "old value"]
*/

// Example
const inFront = [...numbers, 60, 70, 80, 90];
console.log(inFront);

const behindNewValue = [2, 5, ...numbers];
console.log(behindNewValue);

const avengers = [
  'Captain Marvel',
  'Captain America',
  'Tony Stark',
  'Peter Parker',
];
console.log(avengers);

// Make a copy and also add a new value
const newAvengers = [...avengers, 'Hawkeye'];
console.log(newAvengers);

// Change the newAvengers members because Tony Stark and Captain America is dead :(
newAvengers[1] = 'Thor';
newAvengers[2] = 'Hulk';
console.log(newAvengers);

// What if is an array of object? well... no problem!
const userNames = [
  {
    id: 1,
    name: 'Jack Sparrow',
  },
  {
    id: 2,
    name: 'Harry Motter',
  },
  {
    id: 3,
    name: 'Tom Cruise',
  },
];

console.log(userNames);

// Using spread operator to copy the array of object
// We can also add a new object by adding a new object after the spread operator
const copyOfNames = [
  ...userNames,
  {
    id: 4,
    name: 'Apollo Creed',
  },
];

console.log(copyOfNames);

// Notice I write Harry Potter names wrong, we can change it by changing the name reference of the object
console.log(copyOfNames[1]); // Harry Motter

copyOfNames[1].name = 'Harry Potter';
console.log(copyOfNames[1]); // Harry Potter
