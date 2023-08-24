// Selecciona el elemento del carrusel
const carouselElement = document.querySelector('.carousel__lista');

// Configuración del carrusel Glider
const glider = new Glider(carouselElement, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: '.carousel__indicadores',
  arrows: {
    prev: '.carousel__anterior',
    next: '.carousel__siguiente'
  },
});

// Función para pasar a la siguiente imagen automáticamente
function autoSlide() {
  const currentIndex = glider.getCurrentSlide();
  const nextIndex = (currentIndex + 1) % glider.slides.length;
  glider.scrollItem(nextIndex);
}

// Intervalo de tiempo para cambiar las imágenes cada 3 segundos (ajusta según lo desees)
let interval = setInterval(autoSlide, 3000); // Cambia de imagen cada 3 segundos

// Detener el intervalo cuando el mouse está sobre el carrusel
carouselElement.addEventListener('mouseover', () => clearInterval(interval));

// Reanudar el intervalo cuando el mouse sale del carrusel
carouselElement.addEventListener('mouseout', () => interval = setInterval(autoSlide, 3000));