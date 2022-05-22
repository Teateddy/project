const hamburgerMenu = document.querySelector('#hamburger-menu');

const overlay = document.querySelector('#hamburger-menu-content');

hamburgerMenu.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('close');
  overlay.classList.toggle('overlay');
});
