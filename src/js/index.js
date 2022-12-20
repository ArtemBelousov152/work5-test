window.addEventListener("DOMContentLoaded", () => {
    const popit = document.querySelector('.popIt');
    const createStore = document.querySelector('.main__create');
    const closePopIt = document.querySelector('.popIt__close');
    const cancelPopIt = document.querySelector('.popIt__cancel');
    const sideMenu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    const sideMenuClose = document.querySelector('.menu__close'); 

    createStore.addEventListener('click', () => {
        popit.classList.add('popIt__active');
    })
    closePopIt.addEventListener('click', () => {
        popit.classList.remove('popIt__active');
    })
    cancelPopIt.addEventListener('click', () => {
        popit.classList.remove('popIt__active');
    })
    hamburger.addEventListener('click', () => {
        sideMenu.classList.add('active');
    })
    sideMenuClose.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    })
})