import Slider from '../slider/sliderIndex.js';

class MainContainer {
    constructor() {
        this.mainContainer = document.createElement('div');
        this.mainContainer.classList.add('main__container');

        this.slider = new Slider();
    }

    render() {
        //Передать сюда общее количество элементов, либо вызвать fetch в самом слайдере
        //произвести рендеринг элементов
        this.mainContainer.appendChild(this.slider.render());

        return this.mainContainer;
    }
}

export default MainContainer