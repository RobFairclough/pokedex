const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

const id = 1;
P.getPokemonSpeciesByName(id).then(console.dir);
