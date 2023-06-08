import { useFetch } from "../../utils/functions.js";
import { loadProducts } from "../../utils/functions.js";

class ProductList {
    constructor() {
        this.productListContainer = document.createElement('div');
        this.productListContainer.classList.add('product__list-container');


    }

    render(products) {
        
        Array.from(products).forEach((product) => {
            const productListElem = document.createElement('div');
            productListElem.classList.add('product__list-item');

            const productImage = document.createElement('a');
            productImage.classList.add('product__item-image'); 
            productImage.style.backgroundImage = `url(${location.origin}/${product.productImage})`;
            productImage.style.backgroundSize = 'contain';
            productImage.style.backgroundRepeat = 'no-repeat';

            productImage.addEventListener('click', () => {
                const id = product.productId;
                window.location.href = '../../components/productPage.php?id=' + id;
            });

            const productDesc = document.createElement('div');
            productDesc.classList.add('product__item-description');

            const productName = document.createElement('div');
            productName.classList.add('product__item-name');
            productName.innerText = product.productName;

            const productPrice = document.createElement('div');
            productPrice.classList.add('product__item-price');
            productPrice.innerText = product.productPrice + ' руб.';

            productDesc.appendChild(productName);
            productDesc.appendChild(productPrice);

            productListElem.appendChild(productImage);
            productListElem.appendChild(productDesc);

            this.productListContainer.append(productListElem);
        })

        return this.productListContainer;
    }

    loadProduct(filters = {}) {
        return loadProducts(filters);
    }
}

export default ProductList