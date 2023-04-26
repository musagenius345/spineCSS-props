const icon = document.querySelector('.icon');
const menu = document.querySelector('.menu');

icon.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});
