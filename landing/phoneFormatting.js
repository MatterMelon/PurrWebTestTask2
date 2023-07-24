const formatNumber = (value) => {
  if (!value) return value;
  let phoneNumber = value.replace(/[^\d]/g, "");
  if (phoneNumber.length === 0) return "";
  if (phoneNumber.length < 2) return `+ ${phoneNumber}`;
  if (phoneNumber.length < 5)
    return `+ ${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1)}`;
  if (phoneNumber.length < 8)
    return `+ ${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
      1,
      4
    )} ${phoneNumber.slice(4)}`;
  if (phoneNumber.length < 10)
    return `+ ${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
      1,
      4
    )} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7)}`;
  return `+ ${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
    1,
    4
  )} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(
    9
  )}`.slice(0, 17);
};

const formatPhoneNumber = () => {
  const inputField = document.querySelector(
    ".contact-form-modal__phone-number-input"
  );
  const formattedValue = formatNumber(inputField.value);
  inputField.value = formattedValue;
};
