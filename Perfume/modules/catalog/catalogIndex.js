import Category from "./categoryIndex.js";
import ProductList from "./productList.js";

class Catalog {
    constructor() {
        this.catalogContainer = document.createElement("div");
        this.catalogContainer.classList.add("catalog__container");

        this.category = new Category();
        this.productList = new ProductList();
    }

    render() {
        this.catalogContainer.appendChild(this.category.render());

        // Загружаем первые 20 товаров
        this.productList.loadProduct()
            .then((products) => {
                this.catalogContainer.appendChild(this.productList.render(products));
            });

        return this.catalogContainer;
    }
}

export default Catalog