// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// setInterval(() => {
//   const bee = document.createElement('h3');
//   bee.style = `
//    position: absolute;
//    top: ${getRandomArbitrary(0, 100)}%;
//    left: ${getRandomArbitrary(0, 100)}%;
//  `;
//   bee.innerText = 'buzz';
//   document.body.appendChild(bee);
// }, 500);

const btnHamburger = document.querySelector('#btnHamburger');


btnHamburger.addEventListener('click', function() {
    console.log('click hamburger');
if(btnHamburger.classList.contains('mobile-header__menu__open')){
    btnHamburger.classList.remove('mobile-header__menu__open');

}else
{btnHamburger.classList.add('mobile-header__menu__open');
}
    
});


