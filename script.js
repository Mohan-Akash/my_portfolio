// script.js
let lastScrollTop = 0;
const nav = document.getElementById('nav');
const homeSection = document.getElementById('home');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll < lastScrollTop) {
        // Scrolling up
        nav.style.transform = 'translateY(0)';
    } else {
        // Scrolling down
        nav.style.transform = 'translateY(-100%)';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling

    // Check if on the first section
    if (window.pageYOffset < homeSection.offsetHeight) {
        nav.classList.add('transparent');
        nav.classList.remove('solid');
    } else {
        nav.classList.add('solid');
        nav.classList.remove('transparent');
    }
});
