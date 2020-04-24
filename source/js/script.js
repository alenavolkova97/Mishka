var header = document.querySelector('.header');
var button = header.querySelector('.header__toggle');

header.classList.remove('header--nojs');

button.addEventListener('click', function () {
  if (header.classList.contains('header--menu-closed')) {
    header.classList.remove('header--menu-closed');
    header.classList.add('header--menu-opened');
  } else {
    header.classList.remove('header--menu-opened');
    header.classList.add('header--menu-closed');
  }
});
