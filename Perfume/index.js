import App from './modules/app/index.js';
import { sliderLoadInfo } from './modules/slider/sliderLoadInfo.js';

const app = new App();
app.run();

const modalFrame = document.querySelector('.form__container');

window.addEventListener('load', function() {
    document.getElementsByClassName('slider__item')[0].classList.add('active-slide');
});

window.onclick = function(event) {
    if (event.target === modalFrame) {
        modalFrame.classList.remove('--active');
    }
}

sliderLoadInfo();
