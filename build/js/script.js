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

trainersSlider.addEventListener('mousedown', function(evtStart) {
  evtStart.preventDefault();
  let startCoords = evtStart.clientX;
  let onMouseUp = function(evtEnd) {
    let endCoords = evtEnd.clientX;
    if (startCoords < endCoords + 50) {
      shiftLeft();
    } else if (startCoords > endCoords - 50) {
      shiftRight();
    }
    trainersSlider.removeEventListener('mouseup', onMouseUp);
  }
  trainersSlider.addEventListener('mouseup', onMouseUp);
})

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

feedbackSlider.addEventListener('mousedown', function(evtStart) {
  evtStart.preventDefault();
  let startCoords = evtStart.clientX;
  let onMouseUp = function(evtEnd) {
    let endCoords = evtEnd.clientX;
    if (startCoords < endCoords + 50) {
      shiftFeedbackLeft();
    } else if (startCoords > endCoords - 50) {
      shiftFeedbackRight();
    }
    feedbackSlider.removeEventListener('mouseup', onMouseUp);
  }
  feedbackSlider.addEventListener('mouseup', onMouseUp);
})
