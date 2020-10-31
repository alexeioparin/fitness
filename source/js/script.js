'use strict';

let abonMenu = document.querySelector('.abonements__menu');
let abonMenuItems = abonMenu.querySelectorAll('li button');
let trainersSlider = document.querySelector('.trainers__slider');
let trainerPrevButton = document.querySelector('.trainers__arrow-prev');
let trainerNextButton = document.querySelector('.trainers__arrow-next');
let trainersCurrentShift = 0;
let feedbackSlider = document.querySelector('.feedback__slider');
let feedbackPrevButton = document.querySelector('.feedback__arrow-prev');
let feedbackNextButton = document.querySelector('.feedback__arrow-next');
let feedbackCurrentShift = 0;

let shiftOnPrevButton = function (shiftVar, elem) {
  if (shiftVar < 0) {
    shiftVar += 50;
    elem.style.transform = 'translate(' + shiftVar + '%)';
  }
}

abonMenu.addEventListener('click', function(evt) {
  abonMenuItems.forEach(element => element.classList.remove('abonements__active-item'));
  evt.target.classList.add('abonements__active-item');
});

trainerPrevButton.addEventListener('click', function() {
  if (trainersCurrentShift < 0) {
    trainersCurrentShift += 50;
    trainersSlider.style.transform = 'translate(' + trainersCurrentShift + '%)';
  }
})

trainerNextButton.addEventListener('click', function() {
  if (trainersCurrentShift > -50) {
    trainersCurrentShift -= 50;
    trainersSlider.style.transform = 'translate(' + trainersCurrentShift + '%)';
  }
})

feedbackPrevButton.addEventListener('click', function() {
  if (feedbackCurrentShift < 0) {
    feedbackCurrentShift += 50;
    feedbackSlider.style.transform = 'translate(' + feedbackCurrentShift + '%)';
  }
})

feedbackNextButton.addEventListener('click', function() {
  if (feedbackCurrentShift > -50) {
    feedbackCurrentShift -= 50;
    feedbackSlider.style.transform = 'translate(' + feedbackCurrentShift + '%)';
  }
})
