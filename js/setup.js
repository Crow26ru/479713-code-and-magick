'use strict';

var wizards = [];

var showModalSetup = function () {
  var modalSetup = document.querySelector('.setup');
  modalSetup.classList.remove('hidden');
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
    return name + surname;
  }
  return surname + name;
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

showModalSetup();
createWizards(4);
