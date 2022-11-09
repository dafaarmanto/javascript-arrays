const movies = [
  'Inception',
  'Interstellar',
  'The Dark Knight',
  'A Clockwork Orange',
];

// Write a function to find are Interstellar in the array of movies?
const isInterstellar = movies.find((check) => check === 'Interstellar');
console.log(isInterstellar); // Interstellar

// Is The Godfather in the movies?
const isGodfather = movies.find((check) => check === 'The Godfather');
console.log(isGodfather); // undefined

const names = [
  {
    name: 'Jude',
  },
  {
    name: 'Bellingham',
  },
];

const isJude = names.find((check) => check.name === 'Jude');
console.log(isJude); // name: Jude

isJude.name = 'Not Jude Anymore :p';
console.log(isJude); // name: Not Jude Anymore :p
