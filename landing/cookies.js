const cookiesWindow = document.querySelector(".cookies");
const cookieCloseButton = document.querySelectorAll(".cookies__close-button");

cookieCloseButton.forEach((button) => {
  button.addEventListener("click", () => {
    cookiesWindow.close();
    cookiesWindow.style.display = "none";
  });
});
