const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  
  // const mappedAnimals = species.map(({ name, residents }) => ({ [name]: residents.length }));
  // const reducedAnimals = mappedAnimals.reduce((accumulator, current) => Object.assign(accumulator, current));
  // const residentsBySpecies = species.map(({ name, residents }) => ({ specie: name, residents }));
  // if (!animal) {
  //   return reducedAnimals;
  // } else if (animal.specie && !animal.sex) {
  //   return residentsBySpecies.find(({ especie }) => especie === animal.specie.residents.length);
  // } else {
  //   return residentsBySpecies.find(({ especie }) => especie === animal.specie).residents
  //   .filter((sex) => sex === animal.sex).length;
  // }
}

module.exports = countAnimals;
