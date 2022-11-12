import './style.css';
import Todo from '../modules/todo.js';
import Store from '../modules/store.js';
import toggle from '../modules/check.js';

// UI class: Handle UI tasks
class UI {
  static showTasks() {
    const tasks = Store.getTasks();

    tasks.forEach((task) => UI.addBookToList(task));
  }

  static addBookToList(task) {
    const list = document.querySelector('.js-list');

    // const div = document.createElement('div');
    // div.classList.add('task-item');

    list.innerHTML += `
      <li class="todo-li">
        <input class="checkbox" type="checkbox" />
        <p class="todo-p-1" id='para' contenteditable='true'>${task.item}</p>
        <button class='delete'>X</button> 
      </li>`;
  }

  // remove function
  static removeTask(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.remove();
    }
  }

  static clearfields() {
    document.querySelector('#dataInput').value = '';
  }
}

// Event: Show Items
document.addEventListener('DOMContentLoaded', () => {
  UI.showTasks();
  document.querySelectorAll('#para').forEach((paragraph, index) => {
    paragraph.addEventListener('input', () => {
      // const todo = new Todo(paragraph.textContent);
      const Storage1 = JSON.parse(localStorage.getItem('tasks')) || [];
      Storage1[index].item = paragraph.textContent;
      localStorage.setItem('tasks', JSON.stringify(Storage1));
      console.log(Storage1[index].item);
      console.log(paragraph.textContent);
    });
  });
  document.querySelectorAll('.delete').forEach((deleteButton) => {
    deleteButton.addEventListener('click', (e) => {
      // remove task from UI
      console.log('This is working');
      Store.removeTask(e.target.previousElementSibling.textContent);
      UI.removeTask(e.target);

      // Remove task from store
    });
  });
});

// Add a task
document.querySelector('.add-to-list').addEventListener('submit', (e) => {
  // prevent the actual submit
  e.preventDefault();

  // get form values
  const item = document.querySelector('#dataInput').value;

  // Instantiate Todo
  const todo = new Todo(item);

  // Add Task to UI
  UI.addBookToList(todo);

  // Add task to Store
  Store.addTask(todo);

  // clear fields
  UI.clearfields();
  if (Store.getTasks().length >= 0) {
    toggle();
  }
  document.querySelectorAll('.delete').forEach((deleteButton) => {
    deleteButton.addEventListener('click', (e) => {
      // remove task from UI
      console.log('This is working');
      Store.removeTask(e.target.previousElementSibling.textContent);
      UI.removeTask(e.target);

      // Remove task from store
    });
  });
});

// Event:

// console.log(Store.getTasks().length);
