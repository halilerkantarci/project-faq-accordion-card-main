const button = document.querySelectorAll(".btn-faq");
button.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    buttons.parentNode.classList.toggle("active");
  });
});

function removeActiveClasses() {
  button.forEach((x) => {
    x.parentNode.classList.remove("active");
  });
}
