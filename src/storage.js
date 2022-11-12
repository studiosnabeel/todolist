export default class Storage {
  constructor() {
    this.arr = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  setLocalStorageItem = () => {
    localStorage.setItem('tasks', JSON.stringify(this.arr));
  };

  addNewTask = ({
    description,
    completed = false,
    index = this.arr.length + 1,
  }) => {
    this.arr.push({ description, completed, index });
    this.setLocalStorageItem();
  };

  deleteTask = (id = null) => {
    // refactor the array by deleting the index from array if Id or index is available
    if (id !== null) {
      this.arr.splice(id, 1);
      this.arr.forEach((item, i) => {
        item.index = i + 1;
      });
      this.setLocalStorageItem();
      return;
    }
    // filter and return only those elements that have completed = false
    this.arr = this.arr.filter((obj) => !obj.completed);
    this.arr.forEach((item, i) => {
      item.index = i + 1;
    });
    this.setLocalStorageItem();
  };

  modifyTask = (id, description, completed) => {
    this.arr[id].description = description;
    this.arr[id].completed = completed;
    this.setLocalStorageItem();
  };
}
