const footerObj = {
    phoneNumber: {
        href: 'tel:+79620413392',
        title: 'ТЕЛЕФОН: +7-962-041-33-92'
    },
    email: {
        href: 'mailto:eft09@mail.ru',
        title: 'ПОЧТА: eft09@mail.ru'
    }
}

class Footer {
    constructor() {
        this.footer = document.createElement('footer');
        this.footer.classList.add('footer');
    }

    render() {
        const footerCopyright = document.createElement('div');
        footerCopyright.classList.add('footer__copyright');
        footerCopyright.innerHTML = '© 2002 - 2023 OOO Perfume';

        const footerNavbar = document.createElement('div');
        footerNavbar.classList.add('footer__navbar');

        const footerNavbarUl = document.createElement('ul');
        footerNavbarUl.classList.add('footer__navbar-ul');

        const footerNavbarLi = this.getFooterLi();
        if (footerNavbarLi) footerNavbarUl.append(...footerNavbarLi)

        footerNavbar.append(footerNavbarUl);

        this.footer.appendChild(footerCopyright);
        this.footer.appendChild(footerNavbar);

        return this.footer;
    }

    getFooterLi() {
        return Object.values(footerObj).map(element => {
            const li = document.createElement('li');
            li.classList.add('footer__navbar-li');

            const a = document.createElement('a');
            a.classList.add('footer__navbar-link');
            a.href = element.href;
            a.innerText = element.title;

            li.append(a);

            return li;
        })
    }
}

export default Footer