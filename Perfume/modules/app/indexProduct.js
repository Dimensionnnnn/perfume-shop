import Header from "../header/headerIndex.js";
import Footer from "../footer/footerIndex.js";
import Product from "../productPage/productIndex.js";
import AuthForm from "../forms/regAuthModalFrame.js";

class AppProduct {
    constructor(productId) {
        this.header = new Header();
        this.product = new Product();
        this.footer = new Footer();
        this.authForm = new AuthForm();

        this.productId = productId;
    }
    render() {
        document.body.appendChild(this.header.render());
        document.body.appendChild(this.product.render(this.productId));
        document.body.appendChild(this.footer.render());
        document.body.appendChild(this.authForm.getElement());
    }

    run() {
        this.render();
    }
}

export default AppProduct