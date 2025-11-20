// src/presidents.js

const presidents = [
  {
    id: 1,
    name: "George Washington",
    birthYear: 1732,
    deathYear: 1799,
    tookOffice: 1789,
    leftOffice: 1797,
    party: null, // No party
  },
  {
    id: 2,
    name: "John Adams",
    birthYear: 1735,
    deathYear: 1826,
    tookOffice: 1797,
    leftOffice: 1801,
    party: "Federalist",
  },
  {
    id: 3,
    name: "Thomas Jefferson",
    birthYear: 1743,
    deathYear: 1826,
    tookOffice: 1801,
    leftOffice: 1809,
    party: "Democratic-Republican",
  },
  // ... include all other presidents up to Joe Biden as you provided
];

// Iteration 1 | Names of All Presidents - map()
function getNames(presidents) {
  return presidents.map(president => president.name);
}

// Iteration 2 | Democratic Presidents - filter()
function getDemocraticPresidents(presidents) {
  return presidents.filter(president => president.party === "Democratic");
}

// Iteration 3 | Count Years in Office - reduce()
function countYearsInOffice(presidents) {
  return presidents.reduce((total, president) => {
    if (president.leftOffice !== null) {
      return total + (president.leftOffice - president.tookOffice);
    }
    return total;
  }, 0);
}

// Iteration 4 | Sort Presidents by Birth Year - sort()
function sortPresidentsByBirthYear(presidents) {
  return [...presidents].sort((a, b) => a.birthYear - b.birthYear);
}

// Bonus: Iteration 5 | Age at Inauguration - map()
function getAgeAtInauguration(presidents) {
  return presidents.map(president => ({
    ...president,
    ageAtInauguration: president.tookOffice - president.birthYear,
  }));
}

// Bonus: Iteration 6 | Presidents Born After - filter()
function getPresidentsBornAfter(presidents, year) {
  return presidents.filter(president => president.birthYear > year);
}

// Bonus: Iteration 7 | Count Republican Presidents - reduce()
function countRepublicanPresidents(presidents) {
  return presidents.reduce(
    (count, president) => (president.party === "Republican" ? count + 1 : count),
    0
  );
}

// Bonus: Iteration 8 | Sort Presidents by Name - sort()
function sortPresidentsByName(presidents) {
  return [...presidents].sort((a, b) => a.name.localeCompare(b.name));
}

// Export functions for testing
export {
  presidents,
  getNames,
  getDemocraticPresidents,
  countYearsInOffice,
  sortPresidentsByBirthYear,
  getAgeAtInauguration,
  getPresidentsBornAfter,
  countRepublicanPresidents,
  sortPresidentsByName,
};
