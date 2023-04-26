const accordions = document.querySelectorAll('.accordion-header');

for (const accordion of accordions) {
  accordion.addEventListener('click', function() {
    this.parentNode.classList.toggle('active');
  });
}
