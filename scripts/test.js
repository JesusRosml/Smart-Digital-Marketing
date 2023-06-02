// Obtén el contenedor del carrusel
const carouselContainer = document.querySelector('.carousel-container');

// Configura la duración y las imágenes
const duration = 3000; // Duración de cada imagen en milisegundos
const images = Array.from(carouselContainer.children);

let currentIndex = 0;
let timer;

function startCarousel() {
  timer = setInterval(() => {
    // Cambia al índice de la siguiente imagen
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }, duration);
}

function updateCarousel() {
  // Calcula el desplazamiento horizontal para mostrar la imagen actual
  const offset = currentIndex * carouselContainer.offsetWidth;
  carouselContainer.style.transform = `translateX(-${offset}px)`;
}

// Inicia el carrusel
startCarousel();
