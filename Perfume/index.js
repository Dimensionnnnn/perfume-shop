import App from './modules/app/index.js';

const app = new App();
app.run();

const modalFrame = document.querySelector('.form__container');

window.addEventListener('load', function() {
    document.getElementsByClassName('slider__item')[0].classList.add('active-slide');
});

window.onclick = function(event) {
    console.log(event.target);
    if (event.target === modalFrame) {
        modalFrame.classList.remove('--active');
    }
}