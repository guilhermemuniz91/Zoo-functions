const data = require('../data/zoo_data');

const asEspecies = data.species;

const getAnimalsOlderThan = (animal, age) => {
  const getSpecies = asEspecies.find((umaEspecie) => umaEspecie.name === animal);
  const osAnimais = getSpecies.residents;
  return osAnimais.every((umAnimal) => umAnimal.age >= age);
};

module.exports = getAnimalsOlderThan;
