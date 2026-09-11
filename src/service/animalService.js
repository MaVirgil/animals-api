const { animalList } = require('../data/animals')

const animalService = {
  getAll: () => {
    return animalList
  },
  getById: (id) => {
    const found = animalList.find((animal) => animal.id === Number(id));

    return found ?? null;
  }
}

module.exports = { animalService }