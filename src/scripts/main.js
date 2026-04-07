const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('menu-mobile');
const blur = document.getElementById('blur');

const menuLinks = document.querySelectorAll('.menu-mobile__nav-link');

const mobileNavLinks = document.querySelectorAll('.menu-mobile__nav-link');

const sections = document.querySelectorAll('section[id]');

const toggleMenu = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('menu-mobile--open');
    blur.classList.toggle('overlay--active');
    document.body.classList.toggle('body--menu-open');
};

const closeMenu = () => {
    hamburger.classList.remove('hamburger--active');
    nav.classList.remove('menu-mobile--open');
    blur.classList.remove('overlay--active');
    document.body.classList.remove('body--menu-open');
};

hamburger.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();

        // opcional: delay de 300ms
        setTimeout(closeMenu, 300);
    });
});

blur.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');

            mobileNavLinks.forEach(link => {
                link.classList.remove('active');

                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, {
    threshold: 0.6,
    rootMargin: '-64px 0px 0px 0px'
});

sections.forEach(section => observer.observe(section));