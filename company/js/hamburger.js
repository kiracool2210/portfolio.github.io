window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.sidebar'),
    //menuItem = document.querySelectorAll('.sidebar-menu-item'),
    hamburger = document.querySelector('.dashboard-hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('dashboard-hamburger-active');
        menu.classList.toggle('sidebar-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('dashboard-hamburger-active');
            menu.classList.toggle('sidebar-active');
        })
    })
})