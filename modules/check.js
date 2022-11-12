// Event: Line through

export default () => {
  const Check = document.querySelectorAll('.checkbox');
  const Para = document.querySelectorAll('.todo-p-1');

  Check.forEach((chkBtn, index) => {
    chkBtn.addEventListener('click', () => {
      Para[index].classList.toggle('line');
    });
  });
};
