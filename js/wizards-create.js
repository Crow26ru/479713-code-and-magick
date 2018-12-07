'use strict';

(function () {
  var TOTAL_WIZARDS = 4;
  var wizards = [];
  /*
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
  */

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

  /*
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
  */

  var getRemouteWizard = function (elem) {
    var wizard = {
      name: elem.name,
      coatColor: elem.colorCoat,
      eyesColor: elem.colorEyes
    };
    return wizard;
  };

  var createWizards = function (arr) {
    for (var i = 0; i < TOTAL_WIZARDS; i++) {
      wizards.push(getRemouteWizard(arr[i]));
    }
  };

  window.backend.load(createWizards, window.setup.showError);

  window.wizardsCreate = {
    TOTAL_WIZARDS: TOTAL_WIZARDS,
    coatColors: coatColors,
    eyesColors: eyesColors,
    wizards: wizards
  };
})();
