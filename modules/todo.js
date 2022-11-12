// Class Todo
export default class Todo {
  constructor(item, completed = false, index) {
    this.item = item;
    this.index = index;
    this.completed = completed;
  }
}
