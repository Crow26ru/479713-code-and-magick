'use strict';

(function () {
  var TOTAL_WIZARDS = 4;
  var wizards = [];

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

  var createRemouteWizard = function (elementArray) {
    var wizard = {
      name: elementArray.name,
      coatColor: elementArray.colorCoat,
      eyesColor: elementArray.colorEyes
    };
    return wizard;
  };

  var createWizards = function (data) {
    data.forEach(function (element) {
      wizards.push(createRemouteWizard(element));
    });
    window.createSimilarWizards(TOTAL_WIZARDS);
  };

  window.backend.load(createWizards, window.setup.showError);

  window.wizardsCreate = {
    TOTAL_WIZARDS: TOTAL_WIZARDS,
    coatColors: coatColors,
    eyesColors: eyesColors,
    wizards: wizards,
  };
})();
