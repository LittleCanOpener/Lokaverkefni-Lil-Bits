
let selectedItems = [];


const addSelectedItem = (item) => {
  selectedItems.push(item);
};


const getAllSelectedItems = () => {
  return selectedItems;
};


module.exports = {
  addSelectedItem,
  getAllSelectedItems,
};
