'use strict';

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var wizards = [];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var modalSetupOpen = document.querySelector('.setup-open');
var modalSetupClose = document.querySelector('.setup-close');
var inputUserName = document.querySelector('.setup-user-name')

var showModalSetup = function () {
  var modalSetup = document.querySelector('.setup');
  var setupSubmit = document.querySelector('.setup-submit');
  modalSetup.classList.remove('hidden');
  document.addEventListener('keydown', modalEscPressHandler);
  setupSubmit.addEventListener('submit', modalSubmitHandler);
};

var closeModalSetup = function () {
  var modalSetup = document.querySelector('.setup');
  var setupSubmit = document.querySelector('.setup-submit');
  modalSetup.classList.add('hidden');
  document.removeEventListener('keydown', modalEscPressHandler);
  setupSubmit.removeEventListener('submit', modalSubmitHandler);
};

var setName = function () {
  var names = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  return names[Math.floor(Math.random() * names.length)];
};

var setSurname = function () {
  var surnames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  return surnames[Math.floor(Math.random() * surnames.length)];
};

var setFullname = function () {
  var name = setName();
  var surname = setSurname();

  if (Math.floor(Math.random() * 2)) {
    return name + ' ' + surname;
  }
  return surname + ' ' + name;
};

var setCoatColor = function () {
  var colors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

var setEyesColor = function () {
  var colors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

var generateRandomWizard = function () {
  var wizard = {
    name: setFullname(),
    coatColor: setCoatColor(),
    eyesColor: setEyesColor()
  };
  return wizard;
};

var createWizards = function (total) {
  for (var i = 0; i < total; i++) {
    wizards.push(generateRandomWizard());
  }
};

var createSimilarWizards = function (total) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < total; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    fragment.appendChild(wizardElement);
  }
  similarListElement.appendChild(fragment);
};

// ВЫЗОВ ФУНКЦИЙ

showModalSetup();
createWizards(4);
document.querySelector('.setup-similar').classList.remove('hidden');
createSimilarWizards(4);

// ОБРАБОТЧИКИ СОБЫТИЙ

/*
var setupOpenHandler = function () {
  showModalSetup();
};

var setupOpenKeyboardHandler = function (evt) {
  if (evt.keyCode == ENTER_KEYCODE) {
    showModalSetup();
  }
};

var setupCloseHandler = function () {
  closeModalSetup();
};

var setupCloseKeyboardHandler = function (evt) {
  if (evt.keyCode == ESC_KEYCODE) {
    closeModalSetup();
  }
};

var removeCloseKeyboardHandler = function () {
  window.removeEventListener('keydown', setupCloseKeyboardHandler);
};

var addCloseKeyboardHandler = function () {
  window.addEventListener('keydown', setupCloseKeyboardHandler);
};

modalSetupOpen.addEventListener('click', setupOpenHandler);
modalSetupOpen.addEventListener('keydown', setupOpenKeyboardHandler);
modalSetupClose.addEventListener('click', setupCloseHandler);
window.addEventListener('keydown', setupCloseKeyboardHandler);
inputUserName.addEventListener('focus', removeCloseKeyboardHandler);
inputUserName.addEventListener('blur', addCloseKeyboardHandler);
*/

var modalEscPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeModalSetup();
  }
};

var modalSubmitHandler = function (evt) {
  evt.stopPropagation();
};

modalSetupOpen.addEventListener('click', function () {
  showModalSetup();
});

modalSetupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    showModalSetup();
  }
});

modalSetupClose.addEventListener('click', function () {
  closeModalSetup();
});

modalSetupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeModalSetup();
  }
});

inputUserName.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
});
