const themeToggle = document.querySelectorAll("[data-theme]");
const themePointer = document.querySelector(".theme__pointer");
themeToggle.forEach(function (element) {
  element.onclick = function () {
    if (this.dataset.theme === "THEME_DEFAULT") {
      document.body.setAttribute("class", "");
      themePointer.style.transform = "translateX(0)";
      return;
    }
    if (this.dataset.theme === "THEME_2") {
      document.body.setAttribute("class", "theme_2");
      themePointer.style.transform = "translateX(1.25rem)";
      return;
    }
    if (this.dataset.theme === "THEME_3") {
      document.body.setAttribute("class", "theme_3");
      themePointer.style.transform = "translateX(2.65rem)";
      return;
    }
  };
});
