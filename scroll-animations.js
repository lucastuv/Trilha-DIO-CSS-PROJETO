// Seleciona todos os elementos que devem animar ao rolar
const animatedEls = document.querySelectorAll('.module, .testimonial, .banner-content button, #professional-challenges img');

function checkInView() {
  const triggerBottom = window.innerHeight * 0.92;
  animatedEls.forEach(el => {
    const box = el.getBoundingClientRect();
    if (box.top < triggerBottom) {
      el.classList.add('in-view');
    }
  });
}

window.addEventListener('scroll', checkInView);
window.addEventListener('resize', checkInView);
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(checkInView, 200);
}); 