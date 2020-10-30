'use strict';

let abonMenu = document.querySelector('.abonements__menu');
let abonMenuItems = abonMenu.querySelectorAll('li button');
let slider = document.querySelector('.trainers__slider');
let prevButton = document.querySelector('.trainers__arrow-prev');
let nextButton = document.querySelector('.trainers__arrow-next');
let currentShift = 0;

abonMenu.addEventListener('click', function(evt) {
  abonMenuItems.forEach(element => element.classList.remove('abonements__active-item'));
  evt.target.classList.add('abonements__active-item');
});

prevButton.addEventListener('click', function() {
  if (currentShift < 0) {
    currentShift += 12.5;
    slider.style.transform = 'translate(' + currentShift + '%)';
  }
})

nextButton.addEventListener('click', function() {
  if (currentShift > -50) {
    currentShift -= 12.5;
    slider.style.transform = 'translate(' + currentShift + '%)';
  }
})
