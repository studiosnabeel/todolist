class UI {
  static displayTodo() {
    const storedTodo = [
      {
        desc: 'Drink Water.',
        id: '1',
      },

      {
        desc: 'Do Exercise.',
        id: '2',
      },

      {
        desc: 'Complete Es6 project.',
        id: '3',
      },
    ];
    storedTodo.forEach((todo) => UI.addBookToList(todo));
  }

  static addBookToList(todo) {
    const list = document.querySelector('.js-list');
    list.innerHTML += `
      <li class='todo-li'>
      <div class='todo-div'>
      <input class='todo-input-1' type='checkbox'>
      <p class='todo-p-1'>${todo.desc}</p>
      </div>
      <i class="fa-solid fa-trash-can"></i>
      </li>
      `;
  }
}

export default UI;
