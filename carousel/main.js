const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let counter = 0;

nextButton.addEventListener('click', () => {
  if (counter === 2) {
    counter = 0;
  } else {
    counter++;
  }
  carouselContainer.style.transform = `translateX(-${counter * 100}%)`;
});

prevButton.addEventListener('click', () => {
  if (counter === 0) {
    counter = 2;
  } else {
    counter--;
  }
  carouselContainer.style.transform = `translateX(-${counter * 100}%)`;
});
