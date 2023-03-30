const data = require('../data/zoo_data');

const { species, hours } = data;

function mapSpecies(weekDay) {
  return species.filter(({ availability }) => availability.includes(weekDay))
    .map((animal) => animal.name);
}

function exhibitionOfTheDay(weekDay) {
  if (weekDay !== 'Monday') {
    return mapSpecies(weekDay);
  }
  return 'The zoo will be closed!';
}

function workHours(weekDay) {
  const daysOfWeek = Object.keys(hours);
  const daySchedule = hours[daysOfWeek.find((day) => day === weekDay)];
  if (weekDay !== 'Monday') {
    return `Open from ${daySchedule.open}am until ${daySchedule.close}pm`;
  } return 'CLOSED';
}

const fullSchedule = {
  Tuesday: {
    officeHour: workHours('Tuesday'),
    exhibition: exhibitionOfTheDay('Tuesday'),
  },
  Wednesday: {
    officeHour: workHours('Wednesday'),
    exhibition: exhibitionOfTheDay('Wednesday'),
  },
  Thursday: {
    officeHour: workHours('Thursday'),
    exhibition: exhibitionOfTheDay('Thursday'),
  },
  Friday: {
    officeHour: workHours('Friday'),
    exhibition: exhibitionOfTheDay('Friday'),
  },
  Saturday: {
    officeHour: workHours('Saturday'),
    exhibition: exhibitionOfTheDay('Saturday'),
  },
  Sunday: {
    officeHour: workHours('Sunday'),
    exhibition: exhibitionOfTheDay('Sunday'),
  },
  Monday: {
    officeHour: workHours('Monday'),
    exhibition: exhibitionOfTheDay('Monday'),
  },
};

function isDay(weekDay) {
  return Object.keys(hours).find((day) => day === weekDay);
}

function isAnimal(oneSpecie) {
  return species.find(({ name }) => name === oneSpecie);
}

function speciesAvailability(oneSpecie) {
  const findSpecie = species.find(({ name }) => name === oneSpecie);
  const { name, availability } = findSpecie;
  if (oneSpecie === name) {
    return availability;
  }
}

const getSchedule = (scheduleTarget) => {
  if (isAnimal(scheduleTarget)) {
    return speciesAvailability(scheduleTarget);
  }
  if (!scheduleTarget || !isDay(scheduleTarget)) {
    return fullSchedule;
  }
  return { [scheduleTarget]: fullSchedule[scheduleTarget] };
};
// console.log(getSchedule(''));

module.exports = getSchedule;
