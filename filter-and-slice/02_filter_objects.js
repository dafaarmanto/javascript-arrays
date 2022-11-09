const starwars = [
  {
    name: 'Luke Skywalker',
    title: 'Jedi',
  },
  {
    name: 'Leia Skywalker',
    title: 'Empire',
  },
  {
    name: 'Ahsoka',
    title: 'Jedi',
  },
  {
    name: 'Obi-Wan Kenobi',
    title: 'Jedi',
  },
  {
    name: 'Darth Vader',
    title: 'Sith Lord',
  },
];

const jedi = starwars.filter(({ title }) => title === 'Jedi');
console.log(jedi);

const nameStartWithL = starwars.filter(({ name }) => name.startsWith('L'));
console.log(nameStartWithL);
