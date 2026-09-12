const { animalList } = require('../data/animals')

const animalService = {
  getAll: () => {
    return animalList
  },

  getById: (id) => {
    const found = animalList.find((animal) => animal.id === Number(id));

    return found ?? null;
  },
  
  add: (animal) => {
    console.log(`adding animal: ${JSON.stringify(animal)}`);
    animalList.push(animal);

    return animal
  }
}

module.exports = { animalService }