export default (toDoTasks) => {
  const checkBtns = document.querySelectorAll('.checkbox');
  checkBtns.forEach((checkBtn, index) => {
    checkBtn.addEventListener('click', () => {
      checkBtn.childNodes[0].classList.toggle('active');
      checkBtn.nextElementSibling.classList.toggle('active');
      if (checkBtn.childNodes[0].classList.contains('active')) {
        toDoTasks.modifyTask(
          index,
          checkBtn.nextElementSibling.textContent.trim(),
          true,
        );
      } else {
        toDoTasks.modifyTask(
          index,
          checkBtn.nextElementSibling.textContent.trim(),
          false,
        );
      }
    });
  });
};
