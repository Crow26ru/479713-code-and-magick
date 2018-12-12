'use strict';

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var inputUserName = window.setup.modalSetup.querySelector('.setup-user-name');
  var wizardCoat = window.setup.modalSetup.querySelector('.wizard-coat');
  var wizardEyes = window.setup.modalSetup.querySelector('.wizard-eyes');
  var wizardFireball = window.setup.modalSetup.querySelector('.setup-fireball-wrap');
  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var coatColor;
  var eyesColor;
  
  var updateWizards = function () {
    window.wizardsCreate.sortWizards(coatColor, eyesColor);
    createSimilarWizards(window.wizardsCreate.TOTAL_WIZARDS);
  };

  var createSimilarWizards = function (total) {
    var fragment = document.createDocumentFragment();

    while (similarListElement.childElementCount > 0) {
      similarListElement.removeChild(similarListElement.lastChild);
    }

    for (var i = 0; i < total; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = window.wizardsCreate.wizardsCopy[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = window.wizardsCreate.wizardsCopy[i].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = window.wizardsCreate.wizardsCopy[i].eyesColor;
      fragment.appendChild(wizardElement);
    }
    similarListElement.appendChild(fragment);
  };

  window.createSimilarWizards = createSimilarWizards;
  window.setup.modalSetup.querySelector('.setup-similar').classList.remove('hidden');
  // createSimilarWizards(window.wizardsCreate.TOTAL_WIZARDS);

  inputUserName.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });

  wizardCoat.addEventListener('click', function () {
    var hiddenInputs = document.querySelectorAll('.setup-wizard-appearance input');

    for (var i = 0; i < hiddenInputs.length; i++) {
      if (hiddenInputs[i].name === 'coat-color') {
        hiddenInputs[i].value = window.util.getRandomElementArray(window.wizardsCreate.coatColors);
        wizardCoat.style.fill = hiddenInputs[i].value;
        coatColor = hiddenInputs[i].value;
        updateWizards();
      }
    }
  });

  wizardEyes.addEventListener('click', function () {
    var hiddenInputs = document.querySelectorAll('.setup-wizard-appearance input');

    for (var i = 0; i < hiddenInputs.length; i++) {
      if (hiddenInputs[i].name === 'eyes-color') {
        hiddenInputs[i].value = window.util.getRandomElementArray(window.wizardsCreate.eyesColors);
        wizardEyes.style.fill = hiddenInputs[i].value;
        eyesColor = hiddenInputs[i].value;
        updateWizards();
      }
    }
  });

  wizardFireball.addEventListener('click', function () {
    var fireballFieald = wizardFireball.querySelector('input');
    fireballFieald.value = window.util.getRandomElementArray(fireballColors);
    wizardFireball.style.background = fireballFieald.value;
  });
})();
