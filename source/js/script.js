'use strict';

let menuButton = document.querySelector('.header__button');
let headerBlock = document.querySelector('.header');
let mainBlock = document.querySelector('.main-content');
let introBlock = document.querySelector('.intro');

headerBlock.classList.remove('menu-opened');
menuButton.classList.remove('header__button--nojs');
mainBlock.classList.remove('menu-opened');
introBlock.classList.remove('menu-opened');

menuButton.addEventListener('click', function() {
  headerBlock.classList.toggle('menu-opened');
  menuButton.classList.toggle('button-active');
  mainBlock.classList.toggle('menu-opened');
  introBlock.classList.toggle('menu-opened');
})
