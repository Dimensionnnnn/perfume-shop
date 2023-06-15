import { NUM_SLIDER_ELEMENTS } from './sliderIndex.js';
import { getProducts } from '../../utils/functions.js';

export const sliderLoadInfo = () => {
    const elements = document.querySelectorAll('.slider__item');

    getProducts(NUM_SLIDER_ELEMENTS)
        .then((data) => {
            elements.forEach((sliderItem, index) => {
                const sliderElement = data[index];

                const sliderImg = sliderItem.querySelector('.slider__img');
                sliderImg.style.backgroundImage = `url(${location.origin}/${sliderElement.productImage})`
                sliderImg.addEventListener('click', () => {
                    const id = sliderElement.productId;
                    window.location.href = '../../components/productPage.php?id=' + id;
                });

                const slideTitle = sliderItem.querySelector('.slide__title');
                slideTitle.innerText = sliderElement.productName;

                const slideDescription = sliderItem.querySelector('.slide__description');
                slideDescription.innerText = sliderElement.productDescription;

                const slidePrice = sliderItem.querySelector('.slide__price');
                slidePrice.innerText = sliderElement.productPrice;
            })
        })
}