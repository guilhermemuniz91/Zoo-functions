const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  if (!animal.sex) {
    return species.find(({ name }) => name === animal.species).residents.length;
  }
  return species.find((oneSpecie) => oneSpecie.name === animal.species).residents
    .filter((oneResident) => oneResident.sex === animal.sex).length;
};
module.exports = countAnimals;
