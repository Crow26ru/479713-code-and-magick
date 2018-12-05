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

  var setFireballColor = function () {
    var colors = [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  var createSimilarWizards = function (total) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < total; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = window.wizardsCreate.wizards[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = window.wizardsCreate.wizards[i].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = window.wizardsCreate.wizards[i].eyesColor;
      fragment.appendChild(wizardElement);
    }
    similarListElement.appendChild(fragment);
  };

  window.setup.modalSetup.querySelector('.setup-similar').classList.remove('hidden');
  createSimilarWizards(window.wizardsCreate.TOTAL_WIZARDS);

  inputUserName.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });

  wizardCoat.addEventListener('click', function () {
    var hiddenInputs = document.querySelectorAll('.setup-wizard-appearance input');

    for (var i = 0; i < hiddenInputs.length; i++) {
      if (hiddenInputs[i].name === 'coat-color') {
        hiddenInputs[i].value = window.wizardsCreate.setCoatColor();
        wizardCoat.style.fill = hiddenInputs[i].value;
      }
    }
  });

  wizardEyes.addEventListener('click', function () {
    var hiddenInputs = document.querySelectorAll('.setup-wizard-appearance input');

    for (var i = 0; i < hiddenInputs.length; i++) {
      if (hiddenInputs[i].name === 'eyes-color') {
        hiddenInputs[i].value = window.wizardsCreate.setEyesColor();
        wizardEyes.style.fill = hiddenInputs[i].value;
      }
    }
  });

  wizardFireball.addEventListener('click', function () {
    var fireballFieald = wizardFireball.querySelector('input');
    fireballFieald.value = setFireballColor();
    wizardFireball.style.background = fireballFieald.value;
  });
})();