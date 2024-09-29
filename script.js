// Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.querySelector('.menu-button .dropdown-menu');

menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});
