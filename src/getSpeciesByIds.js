const data = require('../data/zoo_data');

const species = data;

const getSpeciesByIds = (...osIds) => {
  if (osIds.length === 0) {
    return [];
  }
  return species
    .filter((umaEspecie) => umaEspecie.id === osIds
      .find((umId) => umId === umaEspecie.id));
};

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
