// Event: Line through

export default () => {
  const Check = document.querySelectorAll('.checkbox');
  const Para = document.querySelectorAll('.todo-p-1');
  const Tick = document.querySelectorAll('.fa-check');

  Check.forEach((chkBtn, index) => {
    chkBtn.addEventListener('click', () => {
      Para[index].classList.toggle('line');
      Tick[index].classList.toggle('on');
    });
  });
};
