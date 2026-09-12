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
  },

  replace(id, newAnimal) {
    const animalToReplace = animalList.find(animal => animal.id === id);

    if (!animalToReplace) {
      return undefined;
    }

    const { id: _id, ...newAnimalWithoutId } = newAnimal;
    const created = ({
      id,
      ...newAnimalWithoutId
    });

    const index = animalList.indexOf(animalToReplace);
    animalList[index] = created;

    return created;
  },

  delete(id) {
    const animalToDelete = animalList.find(animal => animal.id === id);

    if(!animalToDelete) {
      return undefined;
    }

    const index = animalList.indexOf(animalToDelete);
    animalList.splice(index, 1);

    return animalToDelete;
  }
};

module.exports = animalRepository;
