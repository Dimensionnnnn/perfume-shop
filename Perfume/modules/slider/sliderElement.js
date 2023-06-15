class SliderElement {
    constructor() {
        this.sliderItem = document.createElement('div');
        this.sliderItem.classList.add('slider__item');

        this.sliderImg = document.createElement('a');
        this.sliderImg.classList.add('slider__img');
        this.sliderImg.style.backgroundSize = 'contain';
        this.sliderImg.style.backgroundRepeat = 'no-repeat';

        this.slideContent = document.createElement('div');
        this.slideContent.classList.add('slide__content');

        this.slideTitle = document.createElement('div');
        this.slideTitle.classList.add('slide__title');

        this.sliderDescription = document.createElement('div');
        this.sliderDescription.classList.add('slide__description');

        this.sliderPrice = document.createElement('div');
        this.sliderPrice.classList.add('slide__price');

        this.slideId = document.createElement('div');
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