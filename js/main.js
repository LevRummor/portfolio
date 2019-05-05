const menuOpener = document.querySelector('.open-menu');
const menuCloser = document.querySelector('#close-icon');


const menuBody = document.querySelector('.menu-body');
const menuContent = document.querySelector('.content');
const menuItems = document.querySelector('.wrapper');

menuOpener.addEventListener('click', openMenu);
function openMenu(){
    menuBody.className += ' menu-opened';
    menuContent.className = 'contentDisplayTrue';
    setTimeout(() => menuItems.className += ' animateItems', 250);
}
menuCloser.addEventListener('click', closeMenu);
function closeMenu(){
    menuCloser.className += ' rotateIcon';
    setTimeout(() => menuCloser.className='', 400);
    
    menuBody.className += ' close-menu';
    setTimeout(() => menuBody.className='menu-body', 400);
    setTimeout(() => menuContent.className = 'contentDisplayFalse', 300);
    menuItems.className = "wrapper";
}