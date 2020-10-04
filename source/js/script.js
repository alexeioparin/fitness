'use strict';

const menuButton = document.querySelector('.header__button');
const headerBlock = document.querySelector('.header');
const mainBlock = document.querySelector('.main-content');

headerBlock.classList.remove('menu-opened');
menuButton.classList.remove('header__button--nojs');
mainBlock.classList.remove('menu-opened');

menuButton.addEventListener('click', function() {
  headerBlock.classList.toggle('menu-opened');
  menuButton.classList.toggle('button-active');
  mainBlock.classList.toggle('menu-opened');
})

// const countryesList = document.querySelector('.offer-overview__countryes');
// const countryesHeadList = document.querySelectorAll('.offer-overview__countryes a');
// const countryesLinkList = document.querySelectorAll('.countryes__card');
// const counrtyesCardList = document.querySelectorAll('.offer-overview__card');
// let currentCountry;
//
// const chooseCard = function(arr) {
//   arr.forEach(function(item, i, arr) {
//     item.classList.add('visually-hidden');
//     if (item.querySelector('.offer-overview__description-title').textContent === currentCountry) {
//       item.classList.remove('visually-hidden');
//     }
//   })
// }
//
// const chooseListItem = function(arr) {
//   arr.forEach(function(item, i, arr) {
//     item.classList.remove('offer-overview__current-choice');
//     if (item.textContent === currentCountry) {
//       item.classList.add('offer-overview__current-choice');
//     }
//   })
// }
//
// countryesLinkList.forEach(function(item, i, arr) {
//   item.addEventListener('click', function() {
//     currentCountry = item.querySelector('span').textContent;
//     chooseCard(counrtyesCardList);
//     chooseListItem(countryesHeadList);
//     if (document.documentElement.clientWidth < 750) {
//       countryesList.style.marginLeft = 0 - i * 180 + 'px';
//     } else if (document.documentElement.clientWidth >= 750 && document.documentElement.clientWidth < 1000) {
//       countryesList.style.marginLeft = 0 - i * 52 + 'px';
//     }
//   })
// })
//
// countryesHeadList.forEach(function(item, i, arr) {
//   item.addEventListener('click', function() {
//     currentCountry = item.textContent;
//     chooseCard(counrtyesCardList);
//     chooseListItem(countryesHeadList);
//   })
// })
//
// window.addEventListener('resize', function() {
//   if (document.documentElement.clientWidth >= 1000 ) {
//     countryesList.style = '';
//   } else if (document.documentElement.clientWidth < 1000 && currentCountry === 'Хорватия' ) {
//     counrtyesCardList.forEach(function(item, i, arr) {
//       item.classList.add('visually-hidden');
//     })
//     countryesHeadList.forEach(function(item, i, arr) {
//       item.classList.remove('offer-overview__current-choice');
//     })
//     counrtyesCardList[0].classList.remove('visually-hidden');
//     countryesHeadList[0].classList.add('offer-overview__current-choice');
//   }
// });
