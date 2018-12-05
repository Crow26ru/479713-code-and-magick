'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var modalSetup = document.querySelector('.setup');
  var modalSetupOpen = document.querySelector('.setup-open');
  var modalSetupClose = modalSetup.querySelector('.setup-close');

  window.setup = {
    modalSetup: modalSetup
  };

  var showModalSetup = function () {
    modalSetup.classList.remove('hidden');
    document.addEventListener('keydown', modalEscPressHandler);
  };

  var closeModalSetup = function () {
    modalSetup.classList.add('hidden');
    document.removeEventListener('keydown', modalEscPressHandler);
  };

  showModalSetup();

  var modalEscPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeModalSetup();
      window.setupElement.removeAttribute('style');
    }
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
    window.setupElement.removeAttribute('style');
  });

  modalSetupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeModalSetup();
      window.setupElement.removeAttribute('style');
    }
  });

  document.addEventListener('keydown', modalEscPressHandler);
})();
