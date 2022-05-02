// get all key
const numKey = document.querySelectorAll("[data-num]");
const oprKey = document.querySelectorAll("[data-opr]");

const zeroKey = document.getElementById("zero-key");
const pointKey = document.getElementById("point-key");
const equalKey = document.getElementById("equal-key");
const deleteKey = document.getElementById("delete-key");
const resetKey = document.getElementById("reset-key");
// get input text
const inputScreen = document.querySelector("#screen > input");

numKey.forEach((element) => {
  element.onclick = function () {
    if (inputScreen.value[0] === "0" && inputScreen.value.length === 1) {
      return (inputScreen.value = this.dataset.num);
    }
    inputScreen.value += this.dataset.num;
  };
});

oprKey.forEach((element) => {
  element.onclick = function () {
    if (
      inputScreen.value[inputScreen.value.length - 1] === "+" ||
      inputScreen.value[inputScreen.value.length - 1] === "-" ||
      inputScreen.value[inputScreen.value.length - 1] === "x" ||
      inputScreen.value[inputScreen.value.length - 1] === "/"
    )
      return;
    if (inputScreen.value[inputScreen.value.length - 1] === ".") return;
    if (inputScreen.value === "") return;
    inputScreen.value += this.dataset.opr;
  };
});
pointKey.onclick = function () {
  if (inputScreen.value[inputScreen.value.length - 1] === "+" || inputScreen.value[inputScreen.value.length - 1] === "-" || inputScreen.value[inputScreen.value.length - 1] === "x" || inputScreen.value[inputScreen.value.length - 1] === "/")
    return;
  if (inputScreen.value.includes(".")) return;
  if (inputScreen.value === "") return (inputScreen.value += "0.");
  inputScreen.value += ".";
};

equalKey.onclick = function () {
  if (inputScreen.value.includes("+") || inputScreen.value.includes("-") || inputScreen.value.includes("x") || inputScreen.value.includes("/")) {
    if (
      inputScreen.value[inputScreen.value.length - 1] === "+" ||
      inputScreen.value[inputScreen.value.length - 1] === "-" ||
      inputScreen.value[inputScreen.value.length - 1] === "x" ||
      inputScreen.value[inputScreen.value.length - 1] === "/"
    )
      return;
    inputScreen.value = "";
  }
};
deleteKey.onclick = function () {
  inputScreen.value = inputScreen.value.slice(0, -1);
};
resetKey.onclick = function () {
  inputScreen.value = "";
};
