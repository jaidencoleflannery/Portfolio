const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.querySelector('.menu-button .dropdown-menu');
const profileToggle = document.getElementById('profile-toggle');
const profileMenu = document.querySelector('.profile-button .dropdown-profile');

menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

profileToggle.addEventListener('click', () => {
    profileMenu.classList.toggle('active');
});

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const titleGrid = document.getElementById('title-grid');

for(let height = 0; height < screenHeight; height += 60){
    for(let width = 0; width < screenWidth; width += 60){
        titleGrid.innerHTML += `<div class='title-tile'></div>`;
    }
}

const homeRedirect = document.getElementsByClassName('home-redirect');
const aboutRedirect = document.getElementsByClassName('about-redirect');
const contactRedirect = document.getElementsByClassName('contact-redirect');

for(let count = 0; count < homeRedirect.length; count++){
    homeRedirect[count].addEventListener('click', () => {
        window.location.replace('file:///Users/coleflannery/Documents/Webdev/Projects/Portfolio/index.html');
    });
}

for(let count = 0; count < aboutRedirect.length; count++){
    aboutRedirect[count].addEventListener('click', () => {
        window.location.replace('file:///Users/coleflannery/Documents/Webdev/Projects/Portfolio/about.html');
    });
}

for(let count = 0; count < contactRedirect.length; count++){
    contactRedirect[count].addEventListener('click', () => {
        window.location.replace('file:///Users/coleflannery/Documents/Webdev/Projects/Portfolio/contact.html');
    });
}

const subMain = document.getElementsByClassName('sub-main');

for(let count = 0; count < subMain.length; count++){
    container = subMain[count].value;
    random = Math.floor(Math.random() * 5);
    if(random > 0.5){
        random = random * -1;
    }
    subMain[count].style.transform = 'rotate(' + random + 'deg)';
}
