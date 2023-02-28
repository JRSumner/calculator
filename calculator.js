import { operate } from "./math.js";
addButtonClickListeners();
display();

let firstNumber = "";
let secondNumber = "";
let operationArray = [];
let operator = "";
let operatorSelected = false;

function addButtonClickListeners() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      switch (button.textContent) {
        case "=":
          displayResult();
          break;
        case "C":
          clearDisplay();
          break;
        default:
          handleNumberButton(button);
          handleOperatorButton(button);
          break;
      }
    });
  });
}

function handleNumberButton(button) {
  if (!operatorSelected && !isNaN(Number(button.textContent))) {
    firstNumber += button.textContent;
    operationArray.push(button.textContent);
    display(firstNumber);
  } else if (operatorSelected && !isNaN(Number(button.textContent))) {
    secondNumber += button.textContent;
    operationArray.push(button.textContent);
    display(secondNumber);
  }
}

function handleOperatorButton(button) {
  if (isOperator(button.textContent)) {
    operatorSelected = true;
    operator = button.textContent;
    operationArray.push(button.textContent);
    display(button.textContent);
  }
}

function display(value = "0") {
  const display = document.querySelector(".display span");

  value.length > 19
    ? (display.textContent = "Max Characters!")
    : (display.textContent = value);
}

function displayResult() {
  //Testing logic for multiple operations. e.g 5 + 3 * 2 = 16
  for (let i = 0; i < operationArray.length; i + 3) {
    let firstElement = operationArray[i];
    let operatorElement = operationArray[i + 1];
    let secondElement = operationArray[i + 2];

    const test = operate(firstElement, secondElement, operatorElement);
    console.log(test);
  }

  //Current logic for handling single operation, e.g 5 + 3 = 8;
  /*if (firstNumber !== "" && secondNumber != "") {
    const result = operate(Number(firstNumber), Number(secondNumber), operator);
    display(result);
  }*/
}

function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  operatorSelected = false;
  display(0);
}

function isOperator(value) {
  return value === "+" || value === "-" || value === "*" || value === "/";
}
