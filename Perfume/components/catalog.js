import AppCatalog from "../modules/app/indexCatalog.js";

const appCatalog = new AppCatalog();
appCatalog.run();

const modalFrame = document.querySelector('.form__container');

window.onclick = function(event) {
    if (event.target === modalFrame) {
        modalFrame.classList.remove('--active');
    }
}