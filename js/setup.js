'use strict';

(function () {
  var modalSetup = document.querySelector('.setup');
  var modalSetupOpen = document.querySelector('.setup-open');
  var modalSetupClose = modalSetup.querySelector('.setup-close');
  var form = modalSetup.querySelector('form');
  var buttonSubmitElement = form.querySelector('.setup-submit');

  window.setup = {
    modalSetup: modalSetup,
    showError: showError
  };

  var showModalSetup = function () {
    modalSetup.classList.remove('hidden');
    document.addEventListener('keydown', modalEscPressHandler);
  };

  var closeModalSetup = function () {
    modalSetup.classList.add('hidden');

    if (buttonSubmitElement.getAttribute('disabled')) {
      returnDefaultSubmit();
    }

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

  // Функция отображения ошибки

  var showError = function (message) {
    var overlay = document.createElement('div');
    var banner = document.createElement('div');

    // Может лучше завести отдельный файл со стилями?
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.zIndex = '4';

    overlay.style.height = '100%';
    overlay.style.width = '100%';

    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    banner.style.position = 'absolute';
    banner.style.top = '50%';
    banner.style.left = '50%';

    banner.style.padding = '20px';
    banner.style.width = '40%';

    banner.style.fontFamily = '"Arial", sans-serif';
    banner.style.fontSize = '16px';
    banner.style.lineHeight = '24px';
    banner.style.color = '#000000';

    banner.style.backgroundColor = '#ffbbc0';

    banner.style.transform = 'translate(-50%, -50%)';

    banner.textContent = message;
    overlay.appendChild(banner);
    document.body.appendChild(overlay);
  };

  showModalSetup();

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
    window.backend.save(new FormData(form), closeModalSetup, blockSubmitButton, showError);
    evt.preventDefault();
  });
})();
