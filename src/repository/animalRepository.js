const animalList = require('../data/animals');
const idSupplier = require('../data/idSupplier');

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
    const { id: _id, ...animalWithoutId } = animal;

    const animalToAdd = {
      id: assignedId,
      ...animalWithoutId
    };

    animalList.push(animalToAdd);

    idSupplier.add(assignedId);

    return animalToAdd;
  },

  edit(id, fields) {
    const animalToEdit = animalList.find((animal) => animal.id === id);

    if(!animalToEdit) {
      return undefined;
    }

    const { id: _id, ...fieldsWithoutId } = fields;

    Object.assign(animalToEdit, fieldsWithoutId);

    return animalToEdit;
  }
};

module.exports = animalRepository;
