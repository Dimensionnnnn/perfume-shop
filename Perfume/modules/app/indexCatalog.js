import Header from "../header/headerIndex.js";
import Catalog from "../catalog/catalogIndex.js";
import Footer from "../footer/footerIndex.js";
import AuthForm from "../forms/regAuthModalFrame.js";

class AppCatalog {
    constructor() {
        this.header = new Header();
        this.catalog = new Catalog();
        this.footer = new Footer();
        this.authForm = new AuthForm();
    }
    render() {
        document.body.appendChild(this.header.render());
        document.body.appendChild(this.catalog.render());
        document.body.appendChild(this.footer.render());
        document.body.appendChild(this.authForm.getElement());
    }

    run() {
        this.render();
    }
}

export default AppCatalog