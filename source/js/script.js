var header = document.querySelector('.header');
var buttonHeader = header.querySelector('.header__toggle');
var buttonOrder = document.querySelector(".popular__order");
var modal = document.querySelector(".modal-order");
var modalPopup = document.querySelector(".modal-order__popup");
var modalOption = document.querySelector(".form-size__value");
var buttonsCatalog = document.querySelectorAll(".catalog-item__to-basket");
var map = document.querySelector(".contacts__map");
var mapImage = document.querySelector(".contacts__map-image");

header.classList.remove('header--nojs');

buttonHeader.addEventListener('click', function () {
  if (header.classList.contains('header--menu-closed')) {
    header.classList.remove('header--menu-closed');
    header.classList.add('header--menu-opened');
  } else {
    header.classList.remove('header--menu-opened');
    header.classList.add('header--menu-closed');
  }
});

if (buttonOrder) {
  buttonOrder.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-order__popup--modal-close-animated");
    modal.classList.add("modal-order--modal-show");
    modalPopup.classList.add("modal-order__popup--modal-open-animated");
    modalOption.focus();
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();

      if (modal.classList.contains("modal-order--modal-show")) {
        timer = setTimeout('modal.classList.remove("modal-order--modal-show")', 1000);
        modalPopup.classList.remove("modal-order__popup--modal-open-animated");
        modalPopup.classList.add("modal-order__popup--modal-close-animated");
      }
    }
  });
}

if (buttonsCatalog) {
  for (var i = 0; i < buttonsCatalog.length; i++) {
    buttonsCatalog[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-order__popup--modal-close-animated");
    modal.classList.add("modal-order--modal-show");
    modalPopup.classList.add("modal-order__popup--modal-open-animated");
    modalOption.focus();
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();

      if (modal.classList.contains("modal-order--modal-show")) {
        timer = setTimeout('modal.classList.remove("modal-order--modal-show")', 1000);
        modalPopup.classList.remove("modal-order__popup--modal-open-animated");
        modalPopup.classList.add("modal-order__popup--modal-close-animated");
      }
    }
  });
}

if (map) {
  ymaps.ready (function () {
    var myMap = new ymaps.Map(map, {
      center: [59.938635, 30.323118],
      zoom: 17
    });

    var myPin = new ymaps.Placemark([59.938635, 30.323118] , {
        hintContent: "Мы здесь!"}, {
        iconLayout: "default#image",
        iconImageHref: "img/icon-map-pin.svg",
        iconImageSize: [67, 100],
        iconImageOffset: [-22, -85]
    });

    myMap.geoObjects.add(myPin);
  });
}

if (mapImage) {
  mapImage.classList.add("contacts__map-image--hidden");
}

if (map) {
map.classList.add("contacts__map--sizes");
}
