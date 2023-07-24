const burgerMenu = document.querySelector(".burger-menu");
const burgerOpenButton = document.querySelector(".button-burger");
const burgerCloseButton = document.querySelector(".burger-menu__close-button");
const openModalFormButton = document.querySelector(".burger-menu__button");

burgerOpenButton.addEventListener("click", () => {
  burgerMenu.style.display = "block";
});

burgerCloseButton.addEventListener("click", () => {
  burgerMenu.style.display = "none";
});

openModalFormButton.addEventListener("click", () => {
  burgerMenu.style.display = "none";
});
