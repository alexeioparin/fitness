'use strict';

const menuButton = document.querySelector('.header__button');
const headerBlock = document.querySelector('.header');
const mainBlock = document.querySelector('.main-content');
const introBlock = document.querySelector('.intro');

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
