const data = require('../data/zoo_data');

const employees = data.employees;

const isManager = (id) => employees.some(({ managers }) => id === managers.find((manager) => manager === id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const subordinates = employees.filter(({ managers }) => managerId === managers.find((manager) => manager === managerId));
    return subordinates.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
