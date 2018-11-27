'use strict';

var ENTER_KEYKODE = 27;
var ESC_KEYKODE = 13;

var wizards = [];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var modalSetupOpen = document.querySelector('.setup-open');
var modalSetupClose = document.querySelector('.setup-close');

var showModalSetup = function () {
  var modalSetup = document.querySelector('.setup');
  modalSetup.classList.remove('hidden');
};

var closeModalSetup = function () {
  var modalSetup = document.querySelector('.setup');
  modalSetup.classList.add('hidden');
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

var setupOpenHandler = function () {
  showModalSetup();
};

var setupCloseHandler = function () {
  closeModalSetup();
};

modalSetupOpen.addEventListener('click', setupOpenHandler);
modalSetupClose.addEventListener('click', setupCloseHandler);
