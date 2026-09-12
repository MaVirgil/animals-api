const animalList = require('../data/animals');
const animalRepository = require('../data/animalRepository');

const animalService = {
  getAll() {
    return animalRepository.getAll();
  },

  getById(id) {
    const found = animalRepository.getById(id);

    return found;
  },

  add(animal) {
    const added = animalRepository.add(animal);

    return added;
  }
};

module.exports = animalService;
