'use strict';

(function () {
  var modalSetup = document.querySelector('.setup');
  var modalSetupOpen = document.querySelector('.setup-open');
  var modalSetupClose = modalSetup.querySelector('.setup-close');
  var form = modalSetup.querySelector('form');
  var buttonSubmitElement = form.querySelector('.setup-submit');

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
  
  // Блокировка кнопки отправки формы

  var blockSubmitButton = function () {
    var textColor = '#000000';
    var backgroundColor = '#cccccc';
    var opacity = '1';
    var message = 'Сохраняю персонажа...';

    buttonSubmitElement.setAttribute('disabled', 'disabled');
    buttonSubmitElement.style.color = textColor;
    buttonSubmitElement.style.backgroundColor = backgroundColor;
    buttonSubmitElement.style.opacity = opacity;
    buttonSubmitElement.textContent = message;
  };
  
  // Возврат кнопки в исходное состояние
  
  var returnDefaultSubmit = function () {
    var defaultText = 'Сохранить';

    buttonSubmitElement.removeAttribute('disabled');
    buttonSubmitElement.removeAttribute('style');
    buttonSubmitElement.textContent = defaultText;
  };

  showModalSetup();
  blockSubmitButton();
  // returnDefaultSubmit();

  var modalEscPressHandler = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      closeModalSetup();
      window.setupElement.removeAttribute('style');
    }
  };

  modalSetupOpen.addEventListener('click', function () {
    showModalSetup();
  });

  modalSetupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      showModalSetup();
    }
  });

  modalSetupClose.addEventListener('click', function () {
    closeModalSetup();
    window.setupElement.removeAttribute('style');
  });

  modalSetupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closeModalSetup();
      window.setupElement.removeAttribute('style');
    }
  });

  document.addEventListener('keydown', modalEscPressHandler);

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      modalSetup.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
