const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('#carousel > div');

let currentIndex = 0;
let visibleSlides = window.innerWidth < 768 ? 1 : 3; 

function updateVisibleSlides() {
  visibleSlides = window.innerWidth < 768 ? 1 : 3; 
}

function updateCarousel() {
  const offset = -currentIndex * (100 / visibleSlides); 
  carousel.style.transform = `translateX(${offset}%)`;
}

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - visibleSlides;
  updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex < slides.length - visibleSlides) ? currentIndex + 1 : 0;
  updateCarousel();
});

setInterval(() => {
  currentIndex = (currentIndex < slides.length - visibleSlides) ? currentIndex + 1 : 0;
  updateCarousel();
}, 2000);

// Recalcula os slides visíveis ao redimensionar a janela
window.addEventListener('resize', () => {
  updateVisibleSlides();
  updateCarousel();
});
