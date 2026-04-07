const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('menu-mobile');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('menu-mobile--open');
});