// const sidebar = document.querySelector('.sidebar');
// const openButton = document.querySelector('.open-sidebar');
// const closeButton = document.querySelector('.close-sidebar');

// openButton.addEventListener('click', () => {
//   sidebar.classList.add('sidebar-open');
// });

// closeButton.addEventListener('click', () => {
//   sidebar.classList.remove('sidebar-open');
// });


document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const openButton = document.querySelector('.open-sidebar');
  const closeButton = document.querySelector('.close-sidebar');

  openButton.addEventListener('click', () => {
    sidebar.classList.add('sidebar-open');
  });

  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-open');
  });
});
