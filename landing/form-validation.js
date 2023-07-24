const requiredInputs = [
  ...document.querySelectorAll(".contact-form-modal__input"),
].slice(0, 3);
const errorTextBlock = document.querySelector(
  ".contact-form-modal__error-text"
);
const phoneNumberField = document.getElementById("contact-phone-field");
const submitButton = document.getElementById("contact-form-submit-button");
const checkAllFields = () => {
  for (let i = 0; i < requiredInputs.length; i++) {
    if (!requiredInputs[i].value) {
      return false;
    }
  }
  if (checkPhoneNumber()) {
    return true;
  } else return false;
};

const checkPhoneNumber = () => {
  if (
    phoneNumberField.value.length - 6 === 11 &&
    phoneNumberField.value[2] == 7 &&
    phoneNumberField.value[4] == 9
  ) {
    return true;
  } else return false;
};

const setErrorState = (input, error) => {
  input.classList.add("contact-form-modal__input--error");
  let errorMessage = input.parentNode.querySelector(
    ".contact-form-modal__error-message"
  );
  errorMessage.innerHTML = error;
  errorMessage.style.display = "block";
  errorTextBlock.style.display = "block";
};

const clearErrorState = (input) => {
  input.classList.remove("contact-form-modal__input--error");
  input.parentNode.querySelector(
    ".contact-form-modal__error-message"
  ).style.display = "none";
  if (checkAllFields()) errorTextBlock.style.display = "none";
};

requiredInputs.forEach((input) => {
  input.addEventListener("focusout", (e) => {
    if (!input.value) {
      submitButton.setAttribute("disabled", "");
      setErrorState(input, "This field is required.");
    } else if (input === phoneNumberField) {
      if (!checkPhoneNumber()) {
        submitButton.setAttribute("disabled", "");
        setErrorState(input, "Invalid phone number.");
      } else {
        clearErrorState(input);
        if (checkAllFields()) submitButton.removeAttribute("disabled");
      }
    } else {
      clearErrorState(input);
      if (checkAllFields()) submitButton.removeAttribute("disabled");
    }
  });
});
