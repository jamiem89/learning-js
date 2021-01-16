const menuTrigger = document.querySelector('#menuTrigger');
const menu = document.querySelector('#primaryMenu');
const closeTrigger = document.querySelector('.menu-close');

menuTrigger.addEventListener('click', function(){
    menu.classList.add(`is-active`);
});

function closeMenu() {
    menu.classList.remove(`is-active`);
};

closeTrigger.addEventListener('click', closeMenu);