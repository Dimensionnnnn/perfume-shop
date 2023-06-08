import { isUserAuthorized, logout } from '../../utils/functions.js';

const liObj = {
    'index': {
        'href': '/',
        'innerText': 'Главная'
    }, 'catalog': {
        'href': '../../components/catalog.php',
        'innerText': 'Каталог'
    }
}

class Header {
    constructor() {
        this.headerHTML = document.createElement('header');
        this.headerHTML.classList.add('header');
    }
    render() {
        const linkTitle = document.createElement('a');
        linkTitle.classList.add('header__title');
        linkTitle.href = '/';
        linkTitle.innerText = 'Perfume';            

        this.headerHTML.appendChild(linkTitle);

        const headerNavbar = this.getHeaderNavbar();
        this.headerHTML.appendChild(headerNavbar);

        const headerProfile = this.getHeaderProfile();
        this.headerHTML.appendChild(headerProfile);

        return this.headerHTML;
    }

    getHeaderProfile() {
        const headerProfile = document.createElement('div');
        headerProfile.classList.add('header__profile');

        const headerProfileUser = this.getHeaderProfileUser();

        headerProfile.appendChild(headerProfileUser);
        
        return headerProfile;
    }

    getHeaderProfileUser() {
        const headerProfileUser = document.createElement('a');
        headerProfileUser.classList.add('header__profile-user');

        isUserAuthorized().then(isUserAuth => {
            if (isUserAuth === true) {
                headerProfileUser.innerText = 'Выйти';
                headerProfileUser.addEventListener('click', () => logout());
            } else {
                headerProfileUser.innerText = 'Парфюмерия';
                headerProfileUser.addEventListener('click', () => {
                    const authForm = document.querySelector('.form__container');
                    authForm.classList.toggle('--active');
                })
            }
        })

        return headerProfileUser;
    }

    getHeaderNavbar() {
        const headerNavbar = document.createElement('div');
        headerNavbar.classList.add('header__navbar');

        const headerNavbarUl = this.getHeaderNavbarUl();
        headerNavbar.appendChild(headerNavbarUl);

        return headerNavbar;
    }

    getHeaderNavbarUl() {
        const headerNavbarUl = document.createElement('ul');
        headerNavbarUl.classList.add('header__navbar-ul');

        const liObjs = this.getHeaderNavbarLi();
        if (liObjs) {
            liObjs.forEach(element => {
                headerNavbarUl.appendChild(element);
            })
        }

        return headerNavbarUl;
    }

    getHeaderNavbarLi() {
        return Object.values(liObj).map(element => {
            const li = document.createElement('li');
            li.classList.add('header__navbar-li');

            const a = document.createElement('a');
            a.classList.add('header__navbar-link');
            a.href = element.href;
            a.innerText = element.innerText;

            li.appendChild(a);

            return li;
        })
    }
}

export default Header;