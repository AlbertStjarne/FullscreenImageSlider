const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  // Check for next slide
  if(current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  // Check for prev slide
  if(current.previousElementSibling) {
    // Add current to next sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);

  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);

  }

});

// Auto slide
if(auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}