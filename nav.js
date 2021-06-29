const navElement = document.querySelector('.nav-menu');
const bottomMenu = document.querySelector('.navHidden');
const openIcon = document.querySelector('.openIcon');
const closeIcon = document.querySelector('.closeIcon');
const lisItems = document.querySelector('ul.nav-menu > li');

function open() {
  navElement.classList.replace('nav-menu', 'menuVisible');
  bottomMenu.classList.replace('navHidden', 'navShown');
}

function close() {
  navElement.classList.replace('menuVisible', 'nav-menu');
  bottomMenu.classList.replace('navShown', 'navHidden');
}

openIcon.addEventListener('click', open);
closeIcon.addEventListener('click', close);
lisItems.addEventListener('click', close);
lisItems.nextSibling.nextSibling.addEventListener('click', close);
lisItems.nextSibling.nextSibling.nextSibling.nextSibling.addEventListener('click', close);