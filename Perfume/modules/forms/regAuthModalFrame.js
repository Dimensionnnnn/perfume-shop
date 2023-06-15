class FormTitle {
    constructor(titleText) {
      this.element = document.createElement('div');
      this.element.classList.add('form__title');
      this.element.innerText = titleText;
    }
  
    getElement() {
      return this.element;
    }
  }
  
  class FormInput {
    constructor(inputType, inputName, inputPlaceholder) {
      this.element = document.createElement('input');
      this.element.type = inputType;
      this.element.name = inputName;
      this.element.placeholder = inputPlaceholder;
      this.element.classList.add('form__input');
    }
  
    getElement() {
      return this.element;
    }
  }
  
  class FormButton {
    constructor(buttonText) {
      this.element = document.createElement('button');
      this.element.type = 'submit';
      this.element.classList.add('form__button');
      this.element.innerText = buttonText;
    }
  
    getElement() {
      return this.element;
    }
  }
  
  class FormLink {
    constructor(linkText, onClick) {
      this.element = document.createElement('a');
      this.element.classList.add('form__link');
      this.element.innerText = linkText;
      this.element.addEventListener('click', onClick);
    }
  
    getElement() {
      return this.element;
    }
  }
  
  class AuthForm {
    constructor() {
      this.element = document.createElement('div');
      this.element.classList.add('form__container');
  
      this.form = document.createElement('form');
      this.form.method = 'POST';
      this.form.classList.add('form__modal');
      this.form.action = '../../vendor/authorization.php';
      this.form.id = 'login-form';
  
      this.title = new FormTitle('Вход');
      this.inputLogin = new FormInput('text', 'login', 'Логин');
      this.inputPassword = new FormInput('password', 'password', 'Пароль');
      this.button = new FormButton('Войти');
      this.descriptionForm = new FormLink('Зарегистрироваться!', () => this.toggleForm());
  
      this.form.appendChild(this.title.getElement());
      this.form.appendChild(this.inputLogin.getElement());
      this.form.appendChild(this.inputPassword.getElement());
      this.form.appendChild(this.button.getElement());
      this.form.appendChild(this.descriptionForm.getElement());
  
      this.element.appendChild(this.form);
    }
  
    toggleForm() {
      if (this.form.id === 'login-form') {
        this.form.id = 'register-form';
        this.form.action = '../vendor/registration.php';
        this.title.element.innerText = 'Регистрация';
        this.button.element.innerText = 'Зарегистрироваться';
        this.descriptionForm.element.innerText = 'Войти';
      } else {
        this.form.id = 'login-form';
        this.form.action = '../vendor/authorization.php';
        this.title.element.innerText = 'Вход';
        this.button.element.innerText = 'Войти';
        this.descriptionForm.element.innerText = 'Зарегистрироваться';
      }
    }
  
    getElement() {
      return this.element;
    }
  }
  
  export default AuthForm;