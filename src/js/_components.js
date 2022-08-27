//  Показать еще 3 карточки

const btnShowMoreCards = document.querySelector(".btn-more");
const hiddenCards = document.querySelectorAll(".card-link--hidden");

btnShowMoreCards.addEventListener("click", function () {
  hiddenCards.classList.remove("card-link--hidden");
  hiddenCards.forEach(function (card) {
    Cards.classList.remove("card-link--hidden");
  });
});

// Показать скрыть виджиты

const widgets = document.querySelectorAll(".widget");

widgetTitles.forEach(function (widget) {
  widget.addEventListener("click", function (e) {
    if (e.target.classList.contains("widget__title")) {
      e.target.classList.toggle("widget__title--active");
      e.target.nextElementSibling.classList.toggle("widget__body--hidden");
    }
  });
});

// Location

const checkBoxAny = document.querySelector("#location-05");
const topLocationCheckboxes = document.querySelectorAll(
  "[data-location-param]"
);

checkBoxAny.addEventListener("change", function () {
  if (checkBoxAny.checked) {
    topLocationCheckboxes.forEach(function (item) {
      item.checked = false;
    });
    checkBoxAny.checked = true;
  }
});

topLocationCheckboxes.forEach(function (item) {
  item.addEventListener("change", function () {
    if (checkBoxAny.checked) {
      checkBoxAny.checked = false;
    }
  });
});
