'use strict';

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

showModalSetup();
