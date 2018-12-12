'use strict';

(function () {
  var Rating = {
    COAT: 2,
    EYES: 1
  };
  
  var TOTAL_WIZARDS = 4;
  var wizards = [];
  var wizardsCopy = [];
  var wizardCoatElement = document.querySelector('.setup-player input[name=\'coat-color\']');
  var wizardEyesElement = document.querySelector('.setup-player input[name=\'eyes-color\']');

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

  var setRating = function (coatColor, eyesColor) {
    wizardsCopy.forEach(function (element) {
      var rating = 0;

      if (element.coatColor === coatColor) {
        rating += Rating.COAT;
      }
      
      if (element.eyesColor === eyesColor) {
        rating += Rating.EYES;
      }
      
      element.rating = rating;
    });
  };
  
  var sortWizards = function (coatColor, eyesColor) {
    setRating(coatColor, eyesColor);

    wizardsCopy.sort(function (left, right) {
      if (left.rating > right.rating) {
        return -1;
      } else if (left.rating < right.rating) {
        return 1;
      } else {
        return 0;
      }
    });
  };

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
      wizardsCopy.push(createRemouteWizard(element));
    });
    sortWizards(wizardCoatElement.value, wizardEyesElement.value);
    window.createSimilarWizards(TOTAL_WIZARDS);
  };

  window.backend.load(createWizards, window.setup.showError);

  window.wizardsCreate = {
    TOTAL_WIZARDS: TOTAL_WIZARDS,
    coatColors: coatColors,
    eyesColors: eyesColors,
    wizards: wizards,
    wizardsCopy: wizardsCopy
  };
})();
