import './style.css';
import Todo from '../modules/todo.js';
import Store from '../modules/store.js';

// UI class: Handle UI tasks
class UI {
  static showTasks() {
    const tasks = Store.getTasks();

    tasks.forEach((task) => UI.addBookToList(task));
  }

  static addBookToList(task) {
    const list = document.querySelector('.js-list');

    const div = document.createElement('div');
    div.classList.add('task-item');

    div.innerHTML = `
      <li class="todo-li">
         
          <input class="checkbox" type="checkbox" />
            <p class="todo-p-1">${task.item}</p>
         
         <button class='delete'>X</button> 
      </li>`;

    list.appendChild(div);
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
document.addEventListener('DOMContentLoaded', UI.showTasks);

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
});

// Event:

document.querySelector('.js-list').addEventListener('click', (e) => {
  // remove task from UI
  UI.removeTask(e.target);

  // Remove task from store
  Store.removeTask(e.target.previousElementSibling.textContent);
});
