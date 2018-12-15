'use strict';

(function () {
  var TYPE_IMAGES = ['jpg', 'png', 'gif', 'svg', 'bmp', 'webp'];

  var avatarElement = document.querySelector('.setup-user-pic');
  var fileChangeElement = document.querySelector('.upload input');

  fileChangeElement.addEventListener('change', function () {
    var image = fileChangeElement.files[0];
    var imageName = image.name.toLocaleLowerCase();

    var isImage = TYPE_IMAGES.some(function (element) {
      return imageName.endsWith(element);
    });

    if (isImage) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        avatarElement.src = reader.result;
      });

      reader.readAsDataURL(image);
    }
  });
})();
