const data = require('../data/zoo_data');

const { employees, species } = data;

const getOldestFromFirstSpecies = (id) => {
  const findSpeciesByEmployeeId = employees
    .find((oneEmployee) => oneEmployee.id === id).responsibleFor[0];
  const findResidents = species
    .find((oneAnimal) => oneAnimal.id === findSpeciesByEmployeeId).residents;
  const findOldestAnimal = findResidents.sort((a, b) => b.age - a.age);
  return Object.values(findOldestAnimal[0]);
};

module.exports = getOldestFromFirstSpecies;
