document.addEventListener('DOMContentLoaded', () => {
    const harmburgerMenu = document.getElementById('harmburger-menu');
    const navLinks = document.getElementById('nav-links');

    harmburgerMenu.addEventListener('click', () => {
        harmburgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            harmburgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});