const modalForm = document.querySelector(".contact-form-modal");
const modalFormOpenButton = document.querySelectorAll(
  ".modal-form-open-button"
);
const modalFormCloseButton = document.querySelector(
  ".contact-form-modal__close-button"
);
const modalFormSubmitButton = document.getElementById(
  "contact-form-submit-button"
);
const modalThanksWindow = document.querySelector(".thanks-modal");
const modalThanksWindowCloseButton = document.querySelectorAll(
  ".thanks-modal__close-button"
);
const modalFormInputs = document.querySelectorAll(".contact-form-modal__input");

modalFormOpenButton.forEach((button) => {
  button.addEventListener("click", () => {
    modalForm.showModal();
  });
});

modalFormCloseButton.addEventListener("click", () => {
  modalForm.close();
});
modalThanksWindowCloseButton.forEach((button) => {
  button.addEventListener("click", () => {
    modalThanksWindow.close();
  });
});
modalFormSubmitButton.addEventListener("click", () => {
  modalForm.close();
  modalFormInputs.forEach((input) => {
    input.value = "";
  });
  modalThanksWindow.showModal();
});
