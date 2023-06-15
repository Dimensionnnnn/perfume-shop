window.addEventListener('load', () => {
  const sliderObj = {
    dots: document.querySelectorAll('.slider__dots-item'),
    dotsArea: document.querySelector('.slider__dots'),
    slides: document.querySelectorAll('.slider__item'),
    prevButton: document.querySelector('#prev'),
    nextButton: document.querySelector('#next'),
    slideIndex: 1,
  };

  function showSlides(slideIndex) {
    if (slideIndex < 1) {
      sliderObj.slideIndex = sliderObj.slides.length;
    } else if (slideIndex > sliderObj.slides.length) {
      sliderObj.slideIndex = 1;
    }

    for (let idx = 0; idx < sliderObj.slides.length; idx++) {
      sliderObj.slides[idx].classList.remove('active-slide');
    }

    const currentSlide = sliderObj.slides[sliderObj.slideIndex - 1];
    if (currentSlide) {
      currentSlide.classList.add('active-slide');
    }

    for (let idx = 0; idx < sliderObj.dots.length; idx++) {
      sliderObj.dots[idx].classList.remove('active');
    }

    const currentDot = sliderObj.dots[sliderObj.slideIndex - 1];
    if (currentDot) {
      currentDot.classList.add('active');
    }
  }

  function plusSlides(index) {
    showSlides(sliderObj.slideIndex += index);
  }

  function currentSlide(index) {
    showSlides(sliderObj.slideIndex = index);
  }

  if (sliderObj.nextButton) {
    sliderObj.nextButton.addEventListener('click', () => plusSlides(1));
  }

  if (sliderObj.prevButton) {
    sliderObj.prevButton.addEventListener('click', () => plusSlides(-1));
  }

  if (sliderObj.dotsArea) {
    sliderObj.dotsArea.addEventListener('click', (event) => {
      const dot = event.target.closest('.slider__dots-item');
      if (dot) {
        const index = Array.from(sliderObj.dots).indexOf(dot) + 1;
        currentSlide(index);
      }
    });
  }

  showSlides(sliderObj.slideIndex);
});