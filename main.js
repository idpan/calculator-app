// get all key
const numKey = document.querySelectorAll("[data-num]");
const oprKey = document.querySelectorAll("[data-opr]");

const zeroKey = document.getElementById("zero-key");
const pointKey = document.getElementById("point-key");
const equalKey = document.getElementById("equal-key");
const deleteKey = document.getElementById("delete-key");
const resetKey = document.getElementById("reset-key");
// get input text
const displayScreen = document.querySelector("#screen");
const numberContainer = document.querySelector("#screen div");
// to contain user input
let input = [];
let prevScreenSize = numberContainer.offsetWidth;
numKey.forEach((element) => {
  element.onclick = function () {
    if (input[0] === "0" && input.length === 1) {
      return (input = this.dataset.num);
    }
    console.log(input);
    if (countLines(numberContainer) == 4) {
      display(input);
      input = input.slice(0, -1);

      display(input);
      return;
    }

    input.push(this.dataset.num);
    display(input);

    if (countLines(numberContainer) == 4) {
      input = input.slice(0, -1);
      display(input);
      alert("maximum 3 line input");
    }
  };
});

oprKey.forEach((element) => {
  element.onclick = function () {
    for (let i = 0; i < oprKey.length; i++) {
      if (`\xa0${oprKey[i].dataset.opr}\xa0` === input[input.length - 1]) return;
    }
    if (input[input.length - 1] === ".") return;
    if (input.length === 0) return;
    if (countLines(numberContainer) == 4) {
      display(input);
      input = input.slice(0, -1);

      display(input);
      return;
    }

    const opr = `\xa0${this.dataset.opr}\xa0`;
    input.push(opr);
    display(input);
  };
  if (countLines(numberContainer) == 4) {
    input = input.slice(0, -1);
    display(input);
    alert("maximum 3 line input");
  }
});
pointKey.onclick = function () {
  for (let i = 0; i < oprKey.length; i++) {
    if (`\xa0${oprKey[i].dataset.opr}\xa0` === input[input.length - 1]) return;
    if (input.lastIndexOf(`\xa0${oprKey[i].dataset.opr}\xa0`) != -1) {
      if (input.lastIndexOf(`\xa0${oprKey[i].dataset.opr}\xa0`) < input.lastIndexOf(".")) {
        return;
      }
    }
  }
  if (!input.includes(`\xa0+\xa0`) && !input.includes(`\xa0-\xa0`) && !input.includes(`\xa0*\xa0`) && !input.includes(`\xa0/\xa0`)) {
    if (input.includes(".")) {
      return;
    }
  }

  if (input.length === 0) {
    input.push("0");
    input.push(".");
    display(input);
    return;
  }
  if (countLines(numberContainer) == 4) {
    display(input);
    input = input.slice(0, -1);
    display(input);
    return;
  }

  input.push(".");
  display(input);

  if (countLines(numberContainer) == 4) {
    input = input.slice(0, -1);
    display(input);
    alert("maximum 3 line input");
  }
};

equalKey.onclick = function () {
  for (let i = 0; i < oprKey.length; i++) {
    if (`\xa0${oprKey[i].dataset.opr}\xa0` === input[input.length - 1]) return;
  }
  // count result
  input = [eval(input.join("")).toString()];
  display(input);
};

deleteKey.onclick = function () {
  input = input.slice(0, -1);
  display(input);
};
resetKey.onclick = function () {
  input = [];
  display(input);
};

function display(param) {
  const newParam = [...param];
  for (let i = 0; i < newParam.length; i++) {
    if (newParam[i].includes("*")) {
      newParam[i] = `\xa0x\xa0`;
    }
  }

  numberContainer.textContent = newParam.join("");
  console.log(prevScreenSize);
  if (prevScreenSize < displayScreen.offsetWidth - 50) {
    if (numberContainer.offsetWidth >= displayScreen.offsetWidth - 50) {
      numberContainer.style.fontSize = "24px";
    }
  }
  if (prevScreenSize.offsetWidth >= displayScreen.offsetWidth - 50) {
    if (numberContainer.offsetWidth < displayScreen.offsetWidth - 50) {
      console.log("yes");
      numberContainer.style.fontSize = "36px";
    }
  }

  prevScreenSize = numberContainer.offsetWidth;
  console.log(prevScreenSize);
  console.info(displayScreen.offsetWidth - 50);
}

function countLines(target) {
  var style = window.getComputedStyle(target, null);
  var height = parseInt(style.getPropertyValue("height"));
  var font_size = parseInt(style.getPropertyValue("font-size"));
  var line_height = parseInt(style.getPropertyValue("line-height"));
  var box_sizing = style.getPropertyValue("box-sizing");

  if (isNaN(line_height)) line_height = font_size * 1.2;

  if (box_sizing == "border-box") {
    var padding_top = parseInt(style.getPropertyValue("padding-top"));
    var padding_bottom = parseInt(style.getPropertyValue("padding-bottom"));
    var border_top = parseInt(style.getPropertyValue("border-top-width"));
    var border_bottom = parseInt(style.getPropertyValue("border-bottom-width"));
    height = height - padding_top - padding_bottom - border_top - border_bottom;
  }
  var lines = Math.ceil(height / line_height);
  console.log("Lines: " + lines);
  return lines;
}
