// Menu Toggle
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.querySelector('.menu-button .dropdown-menu');
const titleGrid = document.getElementById('title-grid');

menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

for(let height = 0; height < screenHeight; height += 60){
    for(let width = 0; width < screenWidth; width += 60){
        titleGrid.innerHTML += `<div class='title-tile'></div>`;
    }
}

const aboutRedirect = document.getElementById('about-redirect');

aboutRedirect.addEventListener('click', () => {
    window.location.replace('file:///Users/coleflannery/Documents/Webdev/Projects/Portfolio/about.html');
});