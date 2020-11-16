'use strict';

let abonMenu = document.querySelector('.abonements__menu');
let abonMenuItems = abonMenu.querySelectorAll('li button');
let trainersSlider = document.querySelector('.trainers__slider');
let trainersSliderMask = document.querySelector('.trainers__mask');
let trainerPrevButton = document.querySelector('.trainers__arrow-prev');
let trainerNextButton = document.querySelector('.trainers__arrow-next');
let trainersCurrentShift = 0;
let feedbackSlider = document.querySelector('.feedback__slider');
let feedbackPrevButton = document.querySelector('.feedback__arrow-prev');
let feedbackNextButton = document.querySelector('.feedback__arrow-next');
let feedbackCurrentShift = 0;

let shiftLeft = function() {
  if (trainersCurrentShift < -50) {
    let shift = getComputedStyle(trainersSliderMask).width;
    trainersCurrentShift += Number(shift.slice(0, -2));
    trainersSlider.style.transform = 'translate(' + trainersCurrentShift + 'px)';
  }
}

let shiftRight = function() {
  let shift = getComputedStyle(trainersSliderMask).width;
  if (trainersCurrentShift > -Number(getComputedStyle(trainersSlider).width.slice(0, -2)) + Number(shift.slice(0, -2)) + 100) {
    trainersCurrentShift -= Number(shift.slice(0, -2));
    trainersSlider.style.transform = 'translate(' + trainersCurrentShift + 'px)';
  }
}

abonMenu.addEventListener('click', function(evt) {
  for (let i = 0; i < abonMenuItems.length; i++) {
    abonMenuItems[i].classList.remove('abonements__active-item');
  }
  evt.target.classList.add('abonements__active-item');
});

trainerPrevButton.addEventListener('click', shiftLeft);

trainerNextButton.addEventListener('click', shiftRight);

let initialPointTrainer;
let finalPointTrainer;

trainersSlider.addEventListener('touchstart', function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  initialPointTrainer = evt.changedTouches[0];
}, false);

trainersSlider.addEventListener('touchend', function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  finalPointTrainer = evt.changedTouches[0];
  let xAbs = Math.abs(initialPointTrainer.pageX - finalPointTrainer.pageX);

  if (xAbs > 20) {
    if (finalPointTrainer.pageX > initialPointTrainer.pageX) {
      shiftLeft();
    } else {
      shiftRight();
    }
  }
}, false);

let shiftFeedbackLeft = function() {
  if (feedbackCurrentShift < 0) {
    feedbackCurrentShift += 50;
    feedbackSlider.style.transform = 'translate(' + feedbackCurrentShift + '%)';
  }
}

let shiftFeedbackRight = function() {
  if (feedbackCurrentShift > -50) {
    feedbackCurrentShift -= 50;
    feedbackSlider.style.transform = 'translate(' + feedbackCurrentShift + '%)';
  }
}

feedbackPrevButton.addEventListener('click', shiftFeedbackLeft);

feedbackNextButton.addEventListener('click', shiftFeedbackRight);

let initialPointFeedback;
let finalPointFeedback;

feedbackSlider.addEventListener('touchstart', function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  initialPointFeedback = evt.changedTouches[0];
}, false);

feedbackSlider.addEventListener('touchend', function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  finalPointFeedback = evt.changedTouches[0];
  let xAbs = Math.abs(initialPointFeedback.pageX - finalPointFeedback.pageX);

  if (xAbs > 20) {
    if (finalPointFeedback.pageX > initialPointFeedback.pageX) {
      shiftFeedbackLeft();
    } else {
      shiftFeedbackRight();
    }
  }
}, false);
