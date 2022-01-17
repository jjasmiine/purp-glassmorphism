/*  ()  */

/*SHOW MENU*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*VALIDATING EXSISTENCE*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*HIDE MENU*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*HIDE MENU - LINK CLICK*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*ARROW UP - CSS*/
function arrowUp() {
    const arrowUp = document.getElementById('arrow-up');

    if (this.scrollY >= 560) arrowUp.classList.add('show-arrow'); else arrowUp.classList.remove('arrow-up')
}

window.addEventListener('scroll', arrowUp)