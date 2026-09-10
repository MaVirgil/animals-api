const { animalList } = require('../data/animals')

const animalService = {
  getAll: () => {
    return animalList
  },
  getById: (id) => {

    let found;

    for (let animal of animalList) {
      if (animal.id === Number(id)) {
        found = animal;
      }
    }

    return found ?? null;
  }
}

module.exports = { animalService }