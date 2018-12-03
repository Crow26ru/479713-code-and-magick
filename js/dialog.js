'use strict';

(function () {
  var setupElement = document.querySelector('.setup');
  var userAvatarElement = setupElement.querySelector('.upload');
  window.setupElement = setupElement;
  
  userAvatarElement.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startPosition = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      
      var shift = {
        x: startPosition.x - moveEvt.clientX,
        y: startPosition.y - moveEvt.clientY
      };
      
      startPosition = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      
      setupElement.style.top = (setupElement.offsetTop - shift.y) + 'px';
      setupElement.style.left = (setupElement.offsetLeft - shift.x) + 'px';
    };
    
    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();
      
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      
      if (dragged) {
        var clickPreventDefaultHandler = function (evt) {
          evt.preventDefault();
          userAvatarElement.removeEventListener('click', clickPreventDefaultHandler);
        };
        userAvatarElement.addEventListener('click', clickPreventDefaultHandler);
      }
    };
    
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });
})();