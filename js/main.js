'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.main-nav');
    const navigationLinks = document.querySelectorAll('.main-nav a');
    const year = document.querySelector('#current-year');

    if (year) {
        year.textContent = new Date().getFullYear().toString();
    }

    if (!menuButton || !navigation) {
        return;
    }

    const closeMenu = () => {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menú de navegación');
    };

    const openMenu = () => {
        navigation.classList.add('is-open');
        menuButton.setAttribute('aria-expanded', 'true');
        menuButton.setAttribute('aria-label', 'Cerrar menú de navegación');
    };

    menuButton.addEventListener('click', () => {
        const isOpen = navigation.classList.contains('is-open');
        isOpen ? closeMenu() : openMenu();
    });

    navigationLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 720) {
            closeMenu();
        }
    });
});
