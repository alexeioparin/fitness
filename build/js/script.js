'use strict';

let onCkickShowMenu = document.querySelector('.header__button');
let headerBlock = document.querySelector('.header');
let mainBlock = document.querySelector('.main-content');
let introBlock = document.querySelector('.intro');

headerBlock.classList.remove('menu-opened');
onCkickShowMenu.classList.remove('header__button--nojs');
mainBlock.classList.remove('menu-opened');
introBlock.classList.remove('menu-opened');

onCkickShowMenu.addEventListener('click', function() {
  headerBlock.classList.toggle('menu-opened');
  onCkickShowMenu.classList.toggle('button-active');
  mainBlock.classList.toggle('menu-opened');
  introBlock.classList.toggle('menu-opened');
})
