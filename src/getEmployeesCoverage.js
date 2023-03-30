const data = require('../data/zoo_data');

const { employees, species } = data;

const AllEmployees = () => employees.map((oneEmployee) => ({
  id: oneEmployee.id,
  fullName: `${oneEmployee.firstName} ${oneEmployee.lastName}`,
  species: oneEmployee.responsibleFor.map((specieId) => data.species
    .find(({ id }) => id === specieId).name),
  locations: oneEmployee.responsibleFor.map((specieId) => data.species
    .find(({ id }) => id === specieId).location),
}));

const singleEmployee = (oneEmployee) => ({
  id: oneEmployee.id,
  fullName: `${oneEmployee.firstName} ${oneEmployee.lastName}`,
  species: oneEmployee.responsibleFor.map((specieId) => species
    .find(({ id }) => id === specieId).name),
  locations: oneEmployee.responsibleFor.map((specieId) => species
    .find(({ id }) => id === specieId).location),
});

const findEmployee = (param) => {
  const getEmployee = employees.find(({ id, firstName, lastName }) => id === param.id
    || firstName === param.name || lastName === param.name);
  if (!getEmployee) {
    throw new Error('Informações inválidas');
  }
  return getEmployee;
};

const getEmployeesCoverage = (param) => {
  if (!param) { return AllEmployees(); }
  return singleEmployee(findEmployee(param));
};

module.exports = getEmployeesCoverage;
