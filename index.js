const openMobile = document.getElementById("mobile-open");
const closeMobile = document.getElementById("mobile-close");
const mobileNav = document.getElementById("mobile-nav");


openMobile.addEventListener('click', () => {
    mobileNav.classList.remove('-translate-x-full');
    mobileNav.classList.add('-translate-x-0');
})

closeMobile.addEventListener('click', () => {
    mobileNav.classList.remove('-translate-x-0');
    mobileNav.classList.add('-translate-x-full');
})