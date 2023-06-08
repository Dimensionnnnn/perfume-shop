import { getBrands } from "../../utils/functions.js";
import { loadProducts } from "../../utils/functions.js";


const genderData = {
    male: {
        gender: 'Мужской',
        id: 0
    },
    female: {
        gender: 'Женский',
        id: 1
    },
    unisex: {
        gender: 'Унисекс',
        id: 2
    }
}

const priceData = {
    upToThousand: 'До 1000 рублей',
    fromThousandToThreeThousand: 'От 1001 до 3000 рублей',
    fromThreeThousandToFiveThousand: 'От 3001 до 5000 рублей',
    fromFiveThousandToTenThousand: 'От 5001 до 10000 рублей',
    tenThousandMore: '10000 рублей и более'
}

const priceInputData = {
    priceInputField: 'От',
    priceTo: 'До'
}

class Category {
    constructor() {
        this.categoryForm = document.createElement("form");
        this.categoryForm.classList.add("category__form");

    }

    render() {
        const brandFieldContainer = document.createElement("div");
        brandFieldContainer.classList.add("category__field-container");

        const nameBrandField = this.getNameForUl('Бренд');
        const brandFieldUl = document.createElement("ul");
        brandFieldUl.classList.add("category__field-ul");
        brandFieldUl.setAttribute('data-name', 'Бренд');

        getBrands()
            .then((data) => {
                Array.from(data).forEach(element => {
                    brandFieldUl.appendChild(this.getCategoryLi(element.brandName, element.brandName));
                })
            })

        const nameGenderField = this.getNameForUl('Пол');
        const genderFieldUl = document.createElement("ul");
        genderFieldUl.classList.add("category__field-ul");
        genderFieldUl.setAttribute('data-name', 'Пол');

        Object.values(genderData).forEach((element) => {
            console.log(element)
            genderFieldUl.appendChild(this.getCategoryLi(element.gender, element.id));
        })

        const priceNamefield = this.getNameForUl('Стоимость');
        const priceFieldUl = document.createElement("ul");
        priceFieldUl.classList.add("category__field-ul");

        Object.values(priceData).forEach((element, index) => {
            priceFieldUl.appendChild(this.getCategoryLi(element, index));
        })


        const pricesInputContainer = document.createElement("div");
        pricesInputContainer.classList.add("category__price-container");

        Object.values(priceInputData).forEach((element, index) => {
            pricesInputContainer.appendChild(this.getPriceInputLi(element, index));
        })

        const buttonSubmit = document.createElement("button");
        buttonSubmit.classList.add("category__field-button");
        buttonSubmit.innerText = "Показать";

        // buttonSubmit.addEventListener('click', (event) => {
        //     event.preventDefault();

        //     const selectedBrands = this.getSelectedValues(
        //         this.categoryForm.querySelectorAll(".category__field-ul[data-name='Бренд'] input[type='checkbox']:checked")
        //     );

        //     const selectedGenders = this.getSelectedValues(
        //         this.categoryForm.querySelectorAll(".category__field-ul[data-name='Пол']  input[type='checkbox']:checked")
        //         )

        //     loadProducts({ brands: selectedBrands, genders: selectedGenders })
        //     .then((products) => {
        //           const productListElement = document.querySelector(".product__list-container");
        //           console.log(products);
        //         //    productListElement.replaceWith(this.productList.render(products)); 
        //         })
        // })


        brandFieldContainer.appendChild(nameBrandField);
        brandFieldContainer.appendChild(brandFieldUl);

        brandFieldContainer.appendChild(nameGenderField);
        brandFieldContainer.appendChild(genderFieldUl);

        // brandFieldContainer.appendChild(priceNamefield);
        // brandFieldContainer.appendChild(priceFieldUl);

        // brandFieldContainer.appendChild(pricesInputContainer);
        brandFieldContainer.appendChild(buttonSubmit);

        this.categoryForm.appendChild(brandFieldContainer);

        return this.categoryForm;
    }

    getCategoryLi(brandName, id) {
        const brandFieldLi = document.createElement("li");
        brandFieldLi.classList.add("category__field-li");
        brandFieldLi.id = id;

        const brandFieldChexBox = document.createElement("input");
        brandFieldChexBox.classList.add("category__field-chexbox");
        brandFieldChexBox.type = "checkbox";
        brandFieldChexBox.id = id;

        const brandFieldTitle = document.createElement("span");
        brandFieldTitle.classList.add("category__field-title");
        brandFieldTitle.innerText = brandName;

        brandFieldLi.appendChild(brandFieldChexBox);
        brandFieldLi.appendChild(brandFieldTitle);

        return brandFieldLi;
    }

    getPriceInputLi(name, id) {
        const priceInputField = document.createElement("input");
        priceInputField.classList.add("category__field-input");
        priceInputField.placeholder = name;
        priceInputField.type = "text";
        priceInputField.id = id;

        return priceInputField;
    }

    getNameForUl(name) {
        const nameForUl = document.createElement("div");
        nameForUl.classList.add("category__name-for-ul");
        nameForUl.innerText = name;
        return nameForUl;
    }

    getSelectedValues(checkboxes) {
        const values = [];
        Array.from(checkboxes).forEach((checkbox) => {
            if (checkbox.checked) {
                values.push(checkbox.id);
            }
        })
        return values.join(",");
      }
}

export default Category