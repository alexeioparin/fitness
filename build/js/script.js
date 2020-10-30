'use strict';

let abonMenu = document.querySelector('.abonements__menu');
let abonMenuItems = abonMenu.querySelectorAll('li button');

abonMenu.addEventListener('click', function(evt) {
  abonMenuItems.forEach(element => element.classList.remove('abonements__active-item'));
  evt.target.classList.add('abonements__active-item');
});
