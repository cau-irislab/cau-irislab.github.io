
document.querySelectorAll('.gallery-slider').forEach((slider) => {
  const slides = slider.querySelectorAll('.gallery-slide');
  const prev = slider.querySelector('.gallery-prev');
  const next = slider.querySelector('.gallery-next');

  let index = 0;

  function showSlide(newIndex) {
    slides[index].classList.remove('active');
    index = (newIndex + slides.length) % slides.length;
    slides[index].classList.add('active');
  }

  prev.addEventListener('click', () => {
    showSlide(index - 1);
  });

  next.addEventListener('click', () => {
    showSlide(index + 1);
  });
});