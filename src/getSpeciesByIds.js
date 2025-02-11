const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...osIds) => {
  if (osIds.length === 0) {
    return [];
  }
  return species
    .filter((umaEspecie) => umaEspecie.id === osIds
      .find((umId) => umId === umaEspecie.id));
};

module.exports = getSpeciesByIds;
