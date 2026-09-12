const animalList = require('../data/animals');
const animalRepository = require('../repository/animalRepository');

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
  },

  edit(id, fields) {
    const edited = animalRepository.edit(id, fields);

    return edited;
  },

  replace(id, newAnimal) {
    const created = animalRepository.replace(id, newAnimal);

    return created;
  }
};

module.exports = animalService;
