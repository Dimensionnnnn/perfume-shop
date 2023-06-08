import Header from '../header/headerIndex.js';
import MainContainer from '../mainContainer/mainContainer.js';
import Footer from '../footer/footerIndex.js';
import AuthForm from '../forms/regAuthModalFrame.js';

class App {
    constructor() {
        this.header = new Header();
        this.mainContainer = new MainContainer();
        this.footer = new Footer();
        this.authForm = new AuthForm();
    }
    render() {
        document.body.appendChild(this.header.render());
        document.body.appendChild(this.mainContainer.render());
        document.body.appendChild(this.footer.render());
        document.body.appendChild(this.authForm.getElement());
    }

    run() {
        this.render();
    }
}

export default App;