const allButtons = document.querySelectorAll(".btn");
const screenInput = document.querySelector(".screen");
const clearBtn = document.querySelector(".btn-clear");
const equalBtn = document.querySelector(".btn-equal");
// console.log(allButtons, "allButtons");

if (allButtons.length > 0) {
  allButtons.forEach(function (singlebutton) {
    // console.log(singlebutton, "singlebutton");
    singlebutton.addEventListener("click", function (event) {
      const currentElement = event.target;
      // const innerText = currentElement.innerText;
      const buttonValue = currentElement.dataset.num;
      // console.log(buttonValue);
      // screenInput.value = screenInput.value + buttonValue;
      screenInput.value += buttonValue;
    });
  });
}

clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  screenInput.value = "";
});

equalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const currentInput = screenInput.value;
  if (onlyLetters(currentInput)) {
    alert("Invalid Input");
  } else {
    screenInput.value = eval(currentInput);
  }
  // console.log(currentInput,"currentInput");
});

function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

screenInput.addEventListener("keyup", function (event) {
  const currentElement = event.target;
  if (onlyLetters) {
    currentElement.value = "";
  }
});
