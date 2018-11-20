var showModalSetup = function () {
  var modalSetup = document.querySelector('.setup');
  modalSetup.classList.remove('hidden');
};

var setName = function () {
  var names = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  return names[Math.floor(Math.random() * names.length)];
};

showModalSetup();
