const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.querySelector('.menu-button .dropdown-menu');

menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const titleGrid = document.getElementById('title-grid');

for(let height = 0; height < screenHeight; height += 60){
    for(let width = 0; width < screenWidth; width += 60){
        titleGrid.innerHTML += `<div class='title-tile'></div>`;
    }
}

const homeRedirect = document.getElementById('home-redirect');
const aboutRedirect = document.getElementById('about-redirect');
const contactRedirect = document.getElementById('contact-redirect');

homeRedirect.addEventListener('click', () => {
    window.location.replace('file:///Users/coleflannery/Documents/Webdev/Projects/Portfolio/index.html');
});

aboutRedirect.addEventListener('click', () => {
    window.location.replace('file:///Users/coleflannery/Documents/Webdev/Projects/Portfolio/about.html');
});

contactRedirect.addEventListener('click', () => {
    window.location.replace('file:///Users/coleflannery/Documents/Webdev/Projects/Portfolio/contact.html');
});