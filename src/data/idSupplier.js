const takenIds = [];

const idSupplier = {
  init: (idList) => {
    idList.forEach((id) => takenIds.push(id));
    sortIds();
  },

  add: (number) => {
    takenIds.push(number);
    sortIds();
  },

  getNext: () => {
    return takenIds.at(-1) + 1;
  },
};

function sortIds() {
  console.log('sorting IDs...');
  takenIds.sort((a, b) => a - b);
}

module.exports = idSupplier;
