import { getProducts } from "../../utils/functions.js";
import SliderElement from "./sliderElement.js";

const sliderButtonObj = {
    'prevButton': {
        'class': 'slider__button-prev',
        'id': 'prev',
        'innerText': '<'
    }, 
    'nextButton': {
        'class': 'slider__button-next',
        'id': 'next',
        'innerText': '>'
    }
}

const NUM_SLIDER_ELEMENTS = 5;

class Slider {
    constructor() {
        this.sliderHTML = document.createElement('div');
        this.sliderHTML.classList.add('slider');

        this.sliderSlides = document.createElement('div');
        this.sliderSlides.classList.add('slider__slides');

        this.sliderDots = document.createElement('div');
        this.sliderDots.classList.add('slider__dots');
    }

    render() {
        //получить 5 элементов слайдера
        getProducts(NUM_SLIDER_ELEMENTS)
            .then((data) => {
                Array.from(data).forEach(element => {
                    const sliderItem = new SliderElement(element);
                    this.sliderSlides.appendChild(sliderItem.getElement());
                })
            })
            .catch((error) => {
                console.log(error);
            })      

        // this.sliderSlides.getElementsByClassName('slider__item')[0].classList.add('active-slide');
        
        this.sliderHTML.append(this.sliderSlides);

        const sliderButtons = this.getSliderButtons();
        if (sliderButtons) this.sliderHTML.append(...sliderButtons);

        const sliderDotsItem = this.getSliderDots(NUM_SLIDER_ELEMENTS);
        if (sliderDotsItem) this.sliderDots.append(...sliderDotsItem);

        this.sliderHTML.append(this.sliderDots);

        return this.sliderHTML;
    }

    getSliderDots(numSliderElements) {
        return Array.from({length: numSliderElements}, () => {
            const dot = document.createElement('div');
            dot.classList.add('slider__dots-item');
            return dot;
        })
    }

    getSliderButtons() {
        return Object.values(sliderButtonObj).map(element => {
            const button = document.createElement('div');
            button.classList.add(element.class);
            button.id = element.id;
            button.innerText = element.innerText;

            return button;
        })
    }
}

export default Slider