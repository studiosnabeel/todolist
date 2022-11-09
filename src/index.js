import './style.css';
import { UI, Todo } from '../modules/index';

// Events

document.addEventListener('DOMContentLoaded', UI.displayTodo);

document.querySelector('.add-to-list').addEventListener('submit', (e) => {
  const todoText = document.querySelector('.todo-input').value;
});

const book = new Todo(desc, completed, id);

UI.addBookToList(todo);
