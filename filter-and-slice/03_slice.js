const villains = ['Joker', 'Green Goblin', 'Sandman', 'The Riddle'];

// Bad approach
const firstThreeVillain = villains.filter((_, i) => i >= 0 && i < 3);
console.log(firstThreeVillain); // ['Joker', 'Green Goblin', 'Sandman']

// Good approach
const goodFirstThree = villains.slice(0, 3);
console.log(goodFirstThree); // ['Joker', 'Green Goblin', 'Sandman']

// Slice can also make a copy of an array
const newVilains = villains.slice();
console.log(newVilains); // ['Joker', 'Green Goblin', 'Sandman', 'The Riddle']

const startFromIndexOne = villains.slice(1);
console.log(startFromIndexOne); // ['Green Goblin', 'Sandman', 'The Riddle']
