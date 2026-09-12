const animalList = require('./animals');
const idSupplier = require('./idSupplier');

idSupplier.init(animalList.map((animal) => animal.id));

const animalRepository = {
  getAll() {
    return animalList;
  },

  getById(id) {
    return animalList.find((animal) => animal.id === id);
  },

  add(animal) {
    const assignedId = idSupplier.getNext();

    //discard existing id field
    const { id: _id, ...animalWithoutId } = animal

    const animalToAdd = {
      id: assignedId,
      ...animalWithoutId
    };

    animalList.push(animalToAdd);

    idSupplier.add(assignedId);

    return animalToAdd;
  }
};

module.exports = animalRepository;
