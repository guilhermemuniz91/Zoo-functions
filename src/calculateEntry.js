const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const criança = entrants.filter((entrant) => entrant.age < 18);
  const adulto = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const idoso = entrants.filter((entrant) => entrant.age >= 50);
  return {
    child: criança.length,
    adult: adulto.length,
    senior: idoso.length,
  };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined) {
    return 0;
  }
  const visitors = countEntrants(entrants);
  const { prices } = data;
  const totalValueChild = visitors.child * prices.child;
  const totalValueAdult = visitors.adult * prices.adult;
  const totalValueSenior = visitors.senior * prices.senior;
  return totalValueChild + totalValueAdult + totalValueSenior;
};

module.exports = { calculateEntry, countEntrants };
