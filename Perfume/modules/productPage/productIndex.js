import { getProductById } from "../../utils/functions.js";

class Product {
    constructor() {
        this.productContainer = document.createElement('div');
        this.productContainer.classList.add('product__container');

        this.productWrapper = document.createElement('div');
        this.productWrapper.classList.add('product__wrapper');

        this.productContainer.appendChild(this.productWrapper);
    }

    render(productId) {
        getProductById(productId)
            .then((product) => {
                const imageContainer = document.createElement('div');
                imageContainer.classList.add('product__image-container');

                const imageComponent = this.getImageComponent(product.productImage);
                imageContainer.appendChild(imageComponent);

                this.productWrapper.appendChild(imageContainer);
                
                const descriptionContainer = document.createElement('div');
                descriptionContainer.classList.add('product__description-container');

                const descriptionTitle = document.createElement('div');
                descriptionTitle.classList.add('product__description-title');
                descriptionTitle.innerText = product.productName;

                const descriptionProduct = document.createElement('div');
                descriptionProduct.classList.add('product__description-product');
                descriptionProduct.innerText = product.productDescription;

                const addContainer = document.createElement('div');
                addContainer.classList.add('product__add-container');

                const price = document.createElement('div');
                price.classList.add('product__price');
                price.innerText = product.productPrice + ' руб.';

                addContainer.appendChild(price);   

                descriptionContainer.append(descriptionTitle);
                descriptionContainer.append(descriptionProduct);
                descriptionContainer.appendChild(addContainer);
                this.productWrapper.appendChild(descriptionContainer);
            })
            .catch((error) => {
                console.log(error);
            })


        this.productContainer.appendChild(this.productWrapper);
        return this.productContainer;
    }

    getImageComponent(productImageUrl) {
        const imageComponent = document.createElement('img');
        imageComponent.classList.add('product__image');
        imageComponent.src = '../../' + productImageUrl;

        return imageComponent;
    }
}

export default Product