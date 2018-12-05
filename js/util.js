'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var getRandomElementArray = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  window.util = {
    ENTER_KEYCODE: ENTER_KEYCODE,
    ESC_KEYCODE: ESC_KEYCODE,
    getRandomElementArray: getRandomElementArray
  };
})();
