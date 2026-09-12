const { animalList } = require('../data/animals');

const animalService = {
  getAll: () => {
    return animalList;
  },

  getById: (id) => {
    const found = animalList.find((animal) => animal.id === id);

    return found;
  },

  add: (animal) => {
    animalList.push(animal);

    return animal;
  },
};

module.exports = animalService;
