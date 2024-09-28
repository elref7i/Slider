'use strict';

//* HTML Eelements
let model = document.querySelector('.my-modal');
let allImage = Array.from(document.querySelectorAll('section img'));
let previousBtn = document.querySelector('.previousBtn');
let netxtBtn = document.querySelector('.netxtBtn');
let closeBtn = document.querySelector('.closeBtn');

//* APP Variabels
let currentIndex;

//* Function

function hiddenModel() {
  model.classList.add('d-none');
}

function displayModel() {
  model.classList.remove('d-none');
}

function getCurrentImageModel(e) {
  let currentImage = e.target;
  currentIndex = allImage.indexOf(currentImage);
  let atrributeCurrent = e.target.getAttribute('src');
  model.querySelector('img').setAttribute('src', atrributeCurrent);
}

function getNextElement() {
  currentIndex++;
  if (currentIndex >= allImage.length) currentIndex = 0;
  console.log(currentIndex);
  let nextElementSrc = allImage[currentIndex].getAttribute('src');
  model.querySelector('img').setAttribute('src', nextElementSrc);
}

function getPreviousElement() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = allImage.length - 1;
  let PreviousElementSrc = allImage[currentIndex].getAttribute('src');
  model.querySelector('img').setAttribute('src', PreviousElementSrc);
  console.log(currentIndex);
}
// *Event

for (let i = 0; i < allImage.length; i++) {
  allImage[i].addEventListener('click', function (e) {
    getCurrentImageModel(e);
    displayModel();
  });
}

netxtBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  getNextElement();
});

previousBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  getPreviousElement();
});

closeBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  hiddenModel();
});
model.addEventListener('click', function (e) {
  if (e.target === model) {
    hiddenModel();
  }
});

// *** ArrowRight - ArrowLeft - Escape

document.addEventListener('keydown', function (e) {
  switch (e.code) {
    case 'ArrowRight':
      getNextElement();
      break;
    case 'ArrowLeft':
      getPreviousElement();
      break;
    case 'Escape':
      hiddenModel();
      break;
  }
});
