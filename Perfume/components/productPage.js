import AppProduct from "../modules/app/indexProduct.js";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const appProduct = new AppProduct(productId);
appProduct.run();

const modalFrame = document.querySelector('.form__container');

window.onclick = function(event) {
    console.log(event.target);
    if (event.target === modalFrame) {
        modalFrame.classList.remove('--active');
    }
}