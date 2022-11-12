import './style.css';
import Storage from './storage.js';
import Check from './check.js';

const toDoTasks = new Storage();
const list = document.querySelector('.js-list');

// Dynamically Add items
const AddListItems = (arr) => {
  list.innerHTML = '';
  arr.forEach((work) => {
    list.innerHTML += `
    <li class="todo-li">
      <button class="checkbox" ><i class="fa-solid fa-check ${
        work.completed ? 'active' : ''
      }"></i></button>
      <div class="container ${work.completed ? 'active' : ''}">
      <div contenteditable="true" class="todo-p-1" id='para'">${
        work.description
      }</div>
      </div>
      <i class="move-item fa-solid fa-ellipsis-vertical"></i>
      <i class="delete-item fa-regular fa-trash-can"></i>
    </li>
    `;
  });
};
// Sort array by indexes
const sortArray = (arr) => arr.sort((a, b) => a.index - b.index);

const ListItemsWithCheckBtns = (arr) => {
  AddListItems(sortArray(arr));
  // After populating list items, we add click listener on check marks
  Check(toDoTasks);

  // Modify values + delete btn event listener
  const modifyTaskLists = document.querySelectorAll('.todo-p-1');
  const moveItemBtn = document.querySelectorAll('.move-item');
  const deleteItemBtn = document.querySelectorAll('.delete-item');
  modifyTaskLists.forEach((modifyTask, index) => {
    modifyTask.addEventListener('input', () => {
      toDoTasks.modifyTask(
        index,
        modifyTask.textContent,
        toDoTasks.arr[index].completed
      );
    });

    modifyTask.addEventListener('focus', () => {
      modifyTask.parentElement.parentElement.classList.add('editing');
      moveItemBtn[index].classList.add('none');
      deleteItemBtn[index].classList.add('active');
      // prevent input from loosing focus
      deleteItemBtn[index].addEventListener('pointerdown', (event) => {
        event.preventDefault();
      });
      deleteItemBtn[index].addEventListener('click', () => {
        toDoTasks.deleteTask(index);
        ListItemsWithCheckBtns(sortArray(toDoTasks.arr));
      });
    });

    modifyTask.addEventListener('blur', () => {
      modifyTask.parentElement.parentElement.classList.remove('editing');
      moveItemBtn[index].classList.remove('none');
      deleteItemBtn[index].classList.remove('active');
    });
  });
};
ListItemsWithCheckBtns(sortArray(toDoTasks.arr));

// form
const inputText = document.querySelector('#dataInput');
const form = document.querySelector('.add-to-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (inputText.value.trim().length > 0) {
    toDoTasks.addNewTask({
      description: inputText.value,
    });
    ListItemsWithCheckBtns(sortArray(toDoTasks.arr));
    form.reset();
  }
});

// Clear completed Tasks
const clearBtn = document.querySelector('.clearAll');
clearBtn.addEventListener('click', () => {
  toDoTasks.deleteTask();
  ListItemsWithCheckBtns(sortArray(toDoTasks.arr));
});

// Refresh Button
const refreshBtn = document.querySelector('.fa-arrows-rotate');
refreshBtn.addEventListener('click', () => {
  refreshBtn.classList.remove('active');
  setInterval(() => {
    refreshBtn.classList.add('active');
  }, 10);
  ListItemsWithCheckBtns(sortArray(toDoTasks.arr));
});
