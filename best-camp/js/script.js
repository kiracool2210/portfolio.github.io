window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.head-menu'),
    menuItem = document.querySelectorAll('.head-menu-item'),
    hamburger = document.querySelector('.head-hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('head-hamburger-active');
        menu.classList.toggle('head-menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('head-hamburger-active');
            menu.classList.toggle('head-menu-active');
        })
    })
})