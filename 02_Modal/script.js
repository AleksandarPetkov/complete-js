'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModals = document.querySelectorAll('.show-modal');

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

showModals.forEach(btn => btn.addEventListener('click', openModal));

closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

//Handling KEYPRESS EVENT
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
