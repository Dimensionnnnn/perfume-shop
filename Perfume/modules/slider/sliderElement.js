class SliderElement {
    constructor(sliderElement) {
        this.sliderItem = document.createElement('div');
        this.sliderItem.classList.add('slider__item');

        this.sliderImg = document.createElement('a');
        this.sliderImg.classList.add('slider__img');
        this.sliderImg.style.backgroundImage = `url(${location.origin}/${sliderElement.productImage})`;
        this.sliderImg.style.backgroundSize = 'contain';
        this.sliderImg.style.backgroundRepeat = 'no-repeat';

        this.sliderImg.addEventListener('click', () => {
            const id = sliderElement.productId;
            window.location.href = '../../components/productPage.php?id=' + id;
        });

        this.slideContent = document.createElement('div');
        this.slideContent.classList.add('slide__content');

        this.slideTitle = document.createElement('div');
        this.slideTitle.classList.add('slide__title');
        this.slideTitle.innerText = sliderElement.productName;

        this.sliderDescription = document.createElement('div');
        this.sliderDescription.classList.add('slide__description');
        this.sliderDescription.innerText = sliderElement.productDescription;

        this.sliderPrice = document.createElement('div');
        this.sliderPrice.classList.add('slide__price');
        this.sliderPrice.innerText = sliderElement.productPrice;

        this.slideId = document.createElement('div');
        this.slideId.innerTextContent = sliderElement.productId;
        this.slideId.hidden = true;

        this.slideContent.appendChild(this.slideTitle);
        this.slideContent.appendChild(this.sliderDescription);
        this.slideContent.appendChild(this.sliderPrice);

        this.sliderItem.appendChild(this.sliderImg);
        this.sliderItem.appendChild(this.slideContent);
    }

    getElement() {
        return this.sliderItem;
    }
}

export default SliderElement