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
        if (window.innerWidth > 760) {
            closeMenu();
        }
    });

    // Resalta el enlace de la sección visible en la navegación.
    const sections = document.querySelectorAll('main section[id]');

    if ('IntersectionObserver' in window && sections.length > 0) {
        const setActive = (id) => {
            navigationLinks.forEach((link) => {
                link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
    }
});
