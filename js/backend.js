'use strict';

(function () {
  var URL_UPLOAD = 'https://js.dump.academy/code-and-magick';
  var URL_DOWNLOAD = 'https://js.dump.academy/code-and-magick/data';

  var save = function (data, onLoad, onSend, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.timeout = '5000';

    xhr.addEventListener('timeout', function () {
      onError('Произошла ошибка соединения. Запрос не успел выпониться за ' + xhr.timeout + 'мс.');
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения. Перезагрузите страницу и попробуйте сохранить персонажа снова.');
    });

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Произошла ошибка запроса.');
      }
    });

    xhr.addEventListener('readystatechange', function () {
      if (xhr.readyState !== 4) {
        onSend();
      }
    });

    xhr.open('POST', URL_UPLOAD);
    xhr.send(data);
  };

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.response = 'json';
    xhr.timeout = '10000';

    xhr.addEventListener('timeout', function () {
      onError('Произошла ошибка соединения. Запрос не успел выпониться за ' + xhr.timeout + 'мс.');
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения. Перезагрузите страницу и попробуйте сохранить персонажа снова.');
    });

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Произошла ошибка запроса.');
      }
    });

    xhr.open('GET', URL_DOWNLOAD);
    xhr.send();
  };

  window.backend = {
    save: save,
    load: load
  };
})();
