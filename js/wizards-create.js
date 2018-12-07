'use strict';

(function () {
  var TOTAL_WIZARDS = 4;
  var wizards = [];
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

  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var setFullname = function () {
    var name = window.util.getRandomElementArray(names);
    var surname = window.util.getRandomElementArray(surnames);

    if (Math.floor(Math.random() * 2)) {
      return name + ' ' + surname;
    }
    return surname + ' ' + name;
  };

  var generateRandomWizard = function () {
    var wizard = {
      name: setFullname(),
      coatColor: window.util.getRandomElementArray(coatColors),
      eyesColor: window.util.getRandomElementArray(eyesColors)
    };
    return wizard;
  };

  var createWizards = function (total) {
    for (var i = 0; i < total; i++) {
      wizards.push(generateRandomWizard());
    }
  };
  
  // ТЕСТ
  
  var createRemouteWizard = function (elementArray) {
    var wizard = {
      name: elementArray.name,
      coatColor: elementArray.colorCoat,
      eyesColor: elementArray.colorEyes
    };
    return wizard;
  };
  
  var createRemWizards = function (data) {    
    for (var i = 0; i < TOTAL_WIZARDS; i++) {
      console.log(createRemouteWizard(data[i]));
    }
  };

  window.backend.load(createRemWizards, window.setup.showError);

  createWizards(TOTAL_WIZARDS);
  // window.backend.load(some, window.setup.showError);

  window.wizardsCreate = {
    TOTAL_WIZARDS: TOTAL_WIZARDS,
    coatColors: coatColors,
    eyesColors: eyesColors,
    wizards: wizards
  };
})();
