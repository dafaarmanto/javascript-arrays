// Find index
const superheroes = ['Batman', 'Superman', 'Iron Man', 'Wolverine', 'Deadpool'];

// Find each superheroes indexes
console.log(superheroes.indexOf('Deadpool')); // Deadpool located at index: 4
console.log(superheroes.indexOf('Batman')); // Batman located at index: 0
console.log(superheroes.lastIndexOf('Wolverine')); // Wolverine located at index: 3

// Write a function to find index of Iron Man
const findIronMan = superheroes.findIndex((name) => name === 'Iron Man');
console.log(findIronMan); // Ah! Iron Man located at index: 2
